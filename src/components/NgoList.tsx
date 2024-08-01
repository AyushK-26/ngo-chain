import React from "react";
import SearchBar from "./SearchBar";
import NgoCard from "./NgoCard";

const NgoList = () => {
  return (
    <div>
      <h2 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl">
        NGO's looking for fund
      </h2>
      <SearchBar />
      <NgoCard />
    </div>
  );
};

export default NgoList;
