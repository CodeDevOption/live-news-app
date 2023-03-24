"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

type Props = {};

const SearchBox = (props: Props) => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    router.push(`/search?term=${input}`);
  };
  return (
    <form
      className="max-w-6xl mx-auto flex justify-between items-center px-5"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        className="flex-1 outline-none w-full h-14 px-3 rounded-sm placeholder:text-gray-500 text-gray-500 bg-transparent dark:text-orange-400 border-b border-b-indigo-500"
        placeholder="Search"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        disabled={!input}
        type="submit"
        className="disabled:cursor-not-allowed disabled:text-gray-400 text-gray-50 bg-gradient-to-br from-blue-500 to-indigo-500 disabled:from-blue-200 disabled:to-indigo-200 px-6 py-3 rounded-md "
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
