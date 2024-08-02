import React from "react";
import SearchBar from "./SearchBar";
import NgoCard from "./NgoCard";

const NgoList = () => {
  return (
    <div className="ngoList mt-16">
      <div className=" flex flex-col gap-2 pb-10 lg:pb-16 lg:flex-row justify-between lg:items-center">
        <h2 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl">
          NGO's Looking For Funds
        </h2>
        <SearchBar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((index) => {
          return <NgoCard key={index} />;
        })}
      </div>
    </div>
  );
};

export default NgoList;
