"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import { types, tags, category, all } from "./filterOptions";
import FilterSection from "./FilterSection";
import { useAppDispatch } from "@/hooks/typedhooks";
import { setFilters } from "@/features/filter-slice";

// Zod schema for validation
const FormSchema = z.object({
  types: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  category: z.array(z.string()).optional(),
});

function AdvanceSearch() {
  const [openSearchForm, setOpenSearchForm] = useState(false);
  const dispatch = useAppDispatch();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      types: [],
      tags: [],
      category: [],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    dispatch(setFilters(data));
    form.reset();
  }

  return (
    <>
      <Button
        className="bg-gray-400"
        variant={"outline"}
        onClick={() => setOpenSearchForm(!openSearchForm)}
      >
        Advance Search
      </Button>

      {openSearchForm && (
        <div className="container border rounded-xl m-4 p-3 shadow-xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Filter Sections: Flex container that adjusts on smaller screens */}
              <div className="flex flex-col sm:flex-row sm:space-x-6 sm:space-y-0 space-y-4">
                <FilterSection name="types" options={types} control={form.control} />
                <FilterSection name="tags" options={tags} control={form.control} />
                <FilterSection name="category" options={category} control={form.control} />
                <FilterSection name="all" options={all} control={form.control} />
              </div>

              {/* Submit Button: Centered and responsive width */}
              <div className="flex justify-center p-1">
                <Button
                  className="bg-blue-700 text-white w-full sm:w-1/4"
                  size="lg"
                  type="submit"
                >
                  Search
                </Button>
              </div>
            </form>
          </Form>
        </div>
      )}
    </>
  );
}

export default AdvanceSearch;
