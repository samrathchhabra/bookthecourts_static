import React, { useState } from "react";
import { Link } from "react-router-dom";
import video from "../assets/home-video.webm";
import nav_logo from "../assets/nav_logo.png";
import green_1 from "../assets/Login-Signup/Ellipse1.png";
import green_2 from "../assets/Login-Signup/Ellipse2.png";
import bookthecourt from "../assets/book_the_court.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(email, password);

    navigate("/");
  };

  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Background Video */}
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Sign-in Form */}
      <div className="relative ">
        {/* Background Image at Top Left (Inside Parent) */}

        <div className="relative flex flex-col space-y-6 gap-6 justify-center items-center min-h-screen z-50 p-2">
          {/* Logo */}
          <div>
            <Link to="/">
              <img
                src={nav_logo}
                alt="logo1"
                className="w-full h-16 items-center p-2"
              />
            </Link>
          </div>

          {/* Form Container with Background Blur */}
          <div className="relative w-full max-w-md px-[2rem] rounded-[1.2rem] flex flex-col justify-between shadow-md border-white border border-opacity-50 bg-gradient-to-t from-black/10 to-black/10">
            {/* Blurred Background Layer */}
            <div className="absolute inset-0 backdrop-blur-md bg-black/20 rounded-[1.2rem]"></div>

            {/* Content (kept clear using z-index) */}
            <div className="relative z-10 py-[7rem]">
              <h1 className="text-white text-[2rem] font-bold">Log In</h1>
              <p className="text-white text-sm mt-2 mb-4">
                Glad You are back.!
              </p>
              <form className="space-y-4" onSubmit={handleLogin}>
                <div>
                  <input
                    type="text"
                    className="w-full px-3 py-2 mt-2 border border-white rounded-md bg-transparent text-white focus:outline-none "
                    placeholder="you@example.com"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <input
                    type="password"
                    className="w-full px-3 py-2 mt-2 border border-white rounded-md bg-transparent text-white focus:outline-none focus:ring"
                    placeholder="*********"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button className="w-full py-2 text-black font-semibold rounded-md bg-gradient-to-b from-[#A2DF00] to-[#EEFFC0] hover:opacity-90">
                  Log In
                </button>
              </form>
            </div>

            <div className="relative z-10 text-center text-white mt-4 gap-4 flex flex-col mb-2">
              <div>
                Don't have an account?{" "}
                <Link to={"/signup"} className="text-[#A2DF00] hover:underline">
                  Sign up
                </Link>
              </div>
              <div className="text-white text-sm flex justify-between items-center p-2 font-[500] font-beVietnam">
                <p>Terms & Conditions</p>
                <p>Support</p>
                <p>Customer Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
