import home from "../../assets/images/home.svg";
import history from "../../assets/images/history.svg";
import profile from "../../assets/images/profile.svg";
import chat from "../../assets/images/chat.svg";

const BottomNav = () => {
  return (
    <nav
      id="bottom-nav"
      className="flex justify-around sm:hidden border-2 border-[#EDEDED] fixed bottom-0 w-full bg-[#F4F4F4] py-3"
    >
      <div className="flex flex-col justify-center items-center">
        <img src={home} alt="" />
        <p className="text-xs text-[#7E7E7E]">Home</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src={chat} alt="" />
        <p className="text-xs text-[#7E7E7E]">Chat</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src={history} alt="" />
        <p className="text-xs text-[#7E7E7E]">History</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src={profile} alt="" />
        <p className="text-xs text-[#7E7E7E]">Profile</p>
      </div>
    </nav>
  );
};

export default BottomNav;
