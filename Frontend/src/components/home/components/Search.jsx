import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = () => {
  return (
    <>
      <div id="search-box" className="w-full max-w-xl flex gap-2">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white px-4 h-10 w-full rounded-2xl outline-none placeholder:font-medium"
          />
          <SearchIcon className="absolute right-[6px] translate-y-[-50%] top-[50%]" />
        </div>
        <button className="bg-[#FFD700] rounded-2xl w-16">
          <KeyboardVoiceIcon />
        </button>
      </div>
    </>
  );
};

export default SearchBox;
