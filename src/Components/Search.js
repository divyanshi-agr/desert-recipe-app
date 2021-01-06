import React from "react";

function Search() {
  return (
    <div className="bg-white shadow p-4 flex">
      <input
        className="w-full rounded p-2"
        type="text"
        placeholder="Search Dish..."
      />
      <button className="bg-pink-400 hover:bg-pink-300 rounded text-white p-2 pl-4 pr-4">
        <p className="font-semibold text-xs">Search</p>
      </button>
    </div>
  );
}

export default Search;
