"use client";

import React, { InputHTMLAttributes, forwardRef } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
  containerClassName?: string;
  showIcon?: boolean;
}

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      className,
      containerClassName,
      onClear,
      showIcon = true,
      value,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          "relative flex w-full max-w-sm items-center",
          containerClassName
        )}
      >
        {showIcon && (
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
        )}
        <input
          {...props}
          ref={ref}
          value={value}
          type="text"
          className={cn(
            "flex h-9 w-full rounded-full border border-input bg-background px-3 py-1 text-sm shadow-sm transition-all",
            "placeholder:text-muted-foreground",
            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary",
            "disabled:cursor-not-allowed disabled:opacity-50",
            showIcon && "pl-10",
            value && onClear && "pr-10",
            className
          )}
        />
        {value && onClear && (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-3 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          >
            <X className="h-4 w-4 text-muted-foreground" />
            <span className="sr-only">Clear search</span>
          </button>
        )}
      </div>
    );
  }
);

SearchBar.displayName = "SearchBar";

export default SearchBar;
