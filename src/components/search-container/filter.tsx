"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const filter = [
  {
    value: "",
    label: "All Creative Fields",
  },
  {
    value: "architecture",
    label: "Architecture",
  },
  {
    value: "art direction",
    label: "Art Direction",
  },
  {
    value: "branding",
    label: "Branding",
  },
  {
    value: "fashion",
    label: "Fashion",
  },
  {
    value: "graphic design",
    label: "Graphic Design",
  },
  {
    value: "illustration",
    label: "Illustration",
  },
  {
    value: "industrial design",
    label: "Industrial Design",
  },
  {
    value: "interaction design",
    label: "Interaction Design",
  },
  {
    value: "motion graphics",
    label: "Motion Graphics",
  },
  {
    value: "photography",
    label: "Photography",
  },
  {
    value: "ui/ux",
    label: "UI/UX",
  },
  {
    value: "web design",
    label: "Web Design",
  },
];

const Filter = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="max-xs:w-full sm:max-w-[200px] justify-between"
        >
          {value
            ? filter.find((filter) => filter.value === value)?.label
            : "Filter"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search for field..." />
          <CommandEmpty>No field found.</CommandEmpty>
          <CommandGroup>
            <ScrollArea className="h-[200px]">
              {filter.map((filter) => (
                <CommandItem
                  key={filter.value}
                  value={filter.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === filter.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {filter.label}
                </CommandItem>
              ))}
            </ScrollArea>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
export default Filter;
