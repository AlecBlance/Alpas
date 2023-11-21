import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="flex pl-2.5 border rounded-md items-center">
      <SearchIcon className="text-muted-foreground h-5 w-5" />
      <Input
        className="border-none text-sm"
        placeholder="Search prototypes..."
      />
    </div>
  );
};
export default Search;
