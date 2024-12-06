import "./App.css";
import Chat from "./components/chat/chat";
import Home from "./components/home/home";
import BottomNav from "./components/navbar/BottomNav";
import SideNav from "./components/navbar/SideNav";
import { useUserContext } from "./context/UserContext";

function App() {
  const { text } = useUserContext();
  return (
    <>
      <div className="flex h-screen relative">
        <div className="w-[15vw]  hidden sm:block"></div>
        <SideNav />
        {/* <Home /> */}
        <Chat />
      </div>

      <BottomNav />
    </>
  );
}

export default App;
