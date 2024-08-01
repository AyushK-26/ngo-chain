import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const SearchBar = () => {
  return (
    <form className="w-2/5">
      <div className="flex items-center my-4 border-[1px] rounded-full relative z-50 w-full border-secondary text-sm">
        <input
          type="text"
          className="w-full px-4 py-2 focus:outline-none rounded-full bg-background"
          placeholder="Seach for NGOs..."
        />
        <button
          type="submit"
          className="h-8 w-8 rounded-2xl flex justify-center items-center m-1 mr-2 p-2"
        >
          <MagnifyingGlassIcon className="h-4 w-4 fill-gray-100" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
