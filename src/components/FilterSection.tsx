import React, { useState } from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Control, FieldValues } from "react-hook-form";

type FilterSectionProps = {
  name: string; // form field name
  options: { id: string; label: string }[]; // options for the filter
  control: Control<FieldValues>; // react-hook-form control, using FieldValues for better typing
};

const FilterSection: React.FC<FilterSectionProps> = ({
  name,
  options,
  control,
}) => {
  // Track the selected checkbox id
  const [selected, setSelected] = useState<string | null>(null);

  const handleCheckboxChange = (
    checked: boolean,
    optionId: string,
    field: any
  ) => {
    // If checked, select the current option and disable others
    if (checked) {
      setSelected(optionId); // Store the selected checkbox ID
      field.onChange([optionId]); // Allow only this one to be checked
    } else {
      setSelected(null); // Reset the selected ID when unchecked
      field.onChange([]); // Uncheck all if deselected
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full sm:w-1/3"> {/* Full width on small screens, 1/3 on larger screens */}
          <FormLabel className="text-sm font-semibold">{name}</FormLabel>
          <div className="flex flex-col gap-4 mt-2">
            {options.map((option) => (
              <FormItem key={option.id} className="flex items-center space-x-3">
                <FormControl>
                  <Checkbox
                    checked={field.value?.includes(option.id) ?? false} // Default to false if `field.value` is undefined
                    onCheckedChange={(checked: boolean) =>
                      handleCheckboxChange(checked, option.id, field)
                    }
                    disabled={selected !== null && selected !== option.id} // Disable other checkboxes if one is selected
                    className="h-5 w-5" // Larger checkbox size for mobile
                  />
                </FormControl>
                <FormLabel className="text-sm">{option.label}</FormLabel>
              </FormItem>
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FilterSection;
