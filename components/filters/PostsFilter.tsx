"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Filter } from "lucide-react";

interface FilterOption {
  label: string;
  value: string;
}

interface PostsFilterProps {
  options: FilterOption[];
  onSelect: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
}

const PostsFilter = ({
  options,
  onSelect,
  defaultValue,
  placeholder = "Filter by",
}: PostsFilterProps) => {
  const [selected, setSelected] = useState<string | undefined>(defaultValue);

  const handleSelect = (option: FilterOption) => {
    setSelected(option.value);
    onSelect(option.value);
  };

  const selectedLabel = options.find((opt) => opt.value === selected)?.label;

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex items-center gap-2 font-medium"
          >
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span>{selectedLabel || placeholder}</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-[180px]">
          {options.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => handleSelect(option)}
              className="cursor-pointer font-medium"
            >
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default PostsFilter;
