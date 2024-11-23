import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { signUpWithEmailAndPassword1 } from "../../config/firebase.config";

const Signup = () => {
  //   const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    // const res = await signUpWithEmailAndPassword1(password, email);
    // if (res === "success") {
    //   console.log(res);
    //   navigate("/");
    //   window.location.reload(false);
    // }
  };

  return (
    <>
      <section className="w-full h-full flex flex-col">
        <nav className="h-16 w-full px-8 border border-GrayDark z-50">
          <ul className="w-full h-full flex justify-between items-center">
            <li className="w-32">
              <img src="https://getwaitlist.com/logo_waitlist.svg" alt="" />
            </li>
            <li className="flex gap-3 h-4/5">
              <button
                className="px-3 h-10 "
                // onClick={() => navigate("/signin")}
              >
                Sign in
              </button>
              <button
                className="bg-blue px-3 h-10 rounded-md text-white"
                // onClick={() => navigate("/signup")}
              >
                Sign up
              </button>
            </li>
          </ul>
        </nav>
        <div className="flex w-full items-center flex-col gap-3 justify-center grow px-5 mt-[-100px]">
          <div>
            <h2 className="text-3xl font-bold">Sign up for an account</h2>
            <p
              className="text-[#5F4FEB] text-center mt-3 cursor-pointer"
              //   onClick={() => navigate("/signin")}
            >
              Already have an account? Sign in here
            </p>
          </div>
          <div className="flex flex-col w-full max-w-lg mt-3">
            <input
              className="w-full h-12 outline-none border border-GrayDark rounded-t-md px-3"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full h-12 outline-none border border-t-0 border-GrayDark rounded-b-md px-3"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-[#5F4FEB] text-white max-w-lg h-10 rounded-md font-semibold"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
      </section>
    </>
  );
};

export default Signup;
