import React from "react";

function Search() {
  return (
    <div class="bg-white shadow p-4 flex">
      <input
        class="w-full rounded p-2"
        type="text"
        placeholder="Search Dish..."
      />
      <button class="bg-pink-400 hover:bg-pink-300 rounded text-white p-2 pl-4 pr-4">
        <p class="font-semibold text-xs">Search</p>
      </button>
    </div>
  );
}

export default Search;
