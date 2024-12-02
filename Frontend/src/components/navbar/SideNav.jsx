
import React, { useEffect, useState } from "react";
import home from "../../assets/images/home.svg";
import history from "../../assets/images/history.svg";
import chat from "../../assets/images/chat.svg";
import profile from "../../assets/images/profile.svg";
import { auth, provider } from "../../googleSignIn/config";
import { signInWithPopup, signOut } from "firebase/auth";

const SideNav = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignIn = () => {
    signInWithPopup(auth, provider).catch((error) => {
      // Handle errors if needed
    });
  };

  const handleSignOut = () => {
    signOut(auth).catch((error) => {
      // Handle errors if needed
    });
  };

  return (
    <nav
      id="side-nav"
      className="hidden sm:flex gap-4 box-border flex-col border-2 items-start pl-10 border-[#EDEDED] h-full fixed top-0 left-0 bg-[#F4F4F4] py-5 w-[15vw]"
    >
      <div className="flex justify-center items-center gap-3">
        <img src={home} alt="Home" />
        <p className="text-xl text-[#7E7E7E]">Home</p>
      </div>
      <div className="flex justify-center items-center gap-3">
        <img src={chat} alt="Chat" />
        <p className="text-xl text-[#7E7E7E]">Chat</p>
      </div>
      <div className="flex justify-center items-center gap-3">
        <img src={history} alt="History" />
        <p className="text-xl text-[#7E7E7E]">History</p>
      </div>
      <div className="flex mt-auto justify-center items-center gap-3">
        {user ? (
          <>
            <button onClick={handleSignOut}>
            <img src={profile} alt="Profile" onClick={handleSignOut} className="your-class-name" />

              <p className="text-xl text-[#7E7E7E]" onClick={handleSignOut}>
                Sign Out
              </p>
            </button>
          </>
        ) : (
          <>
            <button onClick={handleSignIn}>
              <p className="text-xl text-[#7E7E7E]">Log In</p>
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default SideNav;
