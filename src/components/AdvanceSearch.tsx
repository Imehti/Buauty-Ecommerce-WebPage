"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import { types, tags, category } from "./filterOptions";
import FilterSection from "./FilterSection";

// Zod schema for validation
const FormSchema = z.object({
  types: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  category: z.array(z.string()).optional(),
});

function AdvanceSearch() {
  const [openSearchForm, setOpenSearchForm] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      types: [],
      tags: [],
      category: [],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Selected Types:", data.types);
    console.log("Selected Tags:", data.tags);
    console.log("Selected category:", data.category);
    form.reset()
  }

  return (
    <>
      <Button className="bg-blue-700" onClick={() => setOpenSearchForm(!openSearchForm)}>
        Advance Search
      </Button>
      {openSearchForm && (
       <div className="container border rounded-xl m-4 p-3 shadow-xl">
         <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-row items-start justify-between space-x-6">
              <FilterSection name="types" options={types} control={form.control} />
              <FilterSection name="tags" options={tags} control={form.control} />
              <FilterSection name="category" options={category} control={form.control} />
            </div>

            <div className="flex justify-center p-1">
              <Button className="bg-blue-700 text-white w-[25%]" size="lg" type="submit">
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
