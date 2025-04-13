"use client";

import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { FormEventHandler } from "react";
import { useRouter } from "next/navigation";

const SearchInput = () => {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    router.push(`/posts?search=${encodeURIComponent(search)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl md:max-w-2xl">
      <div className="relative">
        <Input
          name="search"
          className="rounded-full bg-white/10 w-full px-5 py-6 md:py-8 text-sm md:text-lg"
          placeholder="Type to search articles..."
        />
        <button
          type="submit"
          className="bg-accent rounded-full p-2 absolute top-2 right-2 md:top-3 md:right-3 z-10 flex justify-center items-center cursor-pointer hover:bg-accent-hover transition-colors duration-300"
        >
          <Search className="size-4 md:size-6" />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
