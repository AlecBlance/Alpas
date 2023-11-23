"use client";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const Search = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const router = useRouter();
  const [text, setText] = useState(search || "");
  const [searchQuery] = useDebounce(text, 500);

  useEffect(() => {
    router.push(`?search=${searchQuery}`);
  }, [searchQuery, router]);

  return (
    <div className="flex pl-2.5 border rounded-md items-center">
      <SearchIcon className="text-muted-foreground h-5 w-5" />
      <Input
        className="border-none text-sm"
        placeholder="Search prototypes..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};
export default Search;
