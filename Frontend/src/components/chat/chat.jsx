import InputBox from "./components/InputBox";
import Messages from "./components/messages";

const Chat = () => {
  return (
    <section
      id="chat"
      className="flex flex-col items-center justify-between h-full w-full px-7 pt-4 sm:pb-6 pb-20 bg-white"
    >
      <div className="flex justify-center w-full">
        <p className="w-full font-semibold text-center text-xl">New Messages</p>
      </div>
      <Messages />
      <InputBox />
    </section>
  );
};

export default Chat;
