"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
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
import { useRouter } from "next/navigation";

const sort = [
  {
    value: "recommended",
    label: "Recommended",
  },
  {
    value: "featured_date",
    label: "Curated",
  },
  {
    value: "appreciations",
    label: "Most Appreciated",
  },
  {
    value: "views",
    label: "Most Viewed",
  },
  {
    value: "comments",
    label: "Most Discussed",
  },
  {
    value: "published_date",
    label: "Most Recent",
  },
];

const Sort = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const search = searchParams.get("search");
    router.push(`${search ? `?search=${search}&` : "?"}sort=${value}`);
  }, [router, searchParams, value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between max-xs:w-full sm:max-w-[200px]"
        >
          {value ? sort.find((sort) => sort.value === value)?.label : "Sort"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Sort by ..." />
          <CommandEmpty>No such sorting found.</CommandEmpty>
          <CommandGroup>
            <ScrollArea className="h-[200px]">
              {sort.map((sort) => (
                <CommandItem
                  key={sort.value}
                  value={sort.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === sort.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {sort.label}
                </CommandItem>
              ))}
            </ScrollArea>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
export default Sort;
