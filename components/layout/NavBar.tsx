"use client";

import React, { useState } from "react";
import SearchBar from "@/components/filters/SearchBar";
import Control from "@/components/layout/Control";

const NavBar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex w-full items-center justify-between gap-4">
      <div className="flex flex-1 justify-center">
        <SearchBar
          placeholder="Search Gather..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onClear={() => setSearch("")}
          containerClassName="max-w-md w-full"
        />
      </div>
      <Control />
    </div>
  );
};

export default NavBar;
