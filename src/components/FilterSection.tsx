import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

type FilterSectionProps = {
  name: string; // form field name
  options: { id: string; label: string }[]; // options for the filter
  control: any; // react-hook-form control
};

const FilterSection: React.FC<FilterSectionProps> = ({ name, options, control }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem className="w-1/3">
          <FormLabel className="text-sm font-semibold">{name}</FormLabel>
          <div className="flex flex-col gap-2 mt-2">
            {options.map((option) => (
              <FormField
                key={option.id}
                control={control}
                name={name}
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={(field.value ?? []).includes(option.id)}
                        onCheckedChange={(checked) => {
                          const currentValue = field.value ?? [];
                          field.onChange(
                            checked
                              ? [...currentValue, option.id]
                              : currentValue.filter((value) => value !== option.id)
                          );
                        }}
                      />
                    </FormControl>
                    <FormLabel className="text-sm">{option.label}</FormLabel>
                  </FormItem>
                )}
              />
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FilterSection;
