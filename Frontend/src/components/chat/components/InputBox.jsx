import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
const InputBox = () => {
  return (
    <div id="search-box" className="w-full max-w-xl flex gap-2">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Ask me anything..."
          className="bg-[#F5F5F5] px-4 h-14 w-full rounded-2xl outline-none placeholder:font-medium"
        />
      </div>
      <button className="bg-[#FFD700] rounded-2xl w-20">
        <SendIcon />
      </button>
    </div>
  );
};

export default InputBox;
