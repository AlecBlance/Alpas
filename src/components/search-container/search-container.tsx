import Filter from "./filter";
import Search from "./search";
import Sort from "./sort";

const SearchContainer = () => {
  return (
    <div className="mx-auto max-w-xl space-y-2">
      <Search />
      <div className="space-y-2 xs:space-x-2 xs:space-y-0">
        <Sort />
        {/* <Filter /> */}
      </div>
    </div>
  );
};
export default SearchContainer;
