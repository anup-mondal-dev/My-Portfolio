import React, { useEffect, useState } from "react";
import Profile from "../assets/Profile.jpeg";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import Linkedin from "../assets/Linkedin.png";

// Technology icons (make sure these paths exist)
// import ReactLogo from "../assets/react.svg";
// import TailwindLogo from "../assets/tailwind.svg";
// import JsLogo from "../assets/js.svg";
// import NodeLogo from "../assets/node.svg";
// import TsLogo from "../assets/ts.svg";

export default function HomeHero() {
  const words = [
    "Full-Stack Developer",
    "Python Developer",
    "Android App Developer",
  ];
  const TYPING_SPEED = 80;
  const DELETING_SPEED = 40;
  const HOLD_DELAY = 1400;

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  /* TYPING EFFECT */
  useEffect(() => {
    if (!isDeleting && subIndex === words[index].length) {
      const timeout = setTimeout(() => setIsDeleting(true), HOLD_DELAY);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      },
      isDeleting ? DELETING_SPEED : TYPING_SPEED
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  /* BLINKING CURSOR */
  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-gray-950 text-white px-6 md:px-24 py-24 overflow-hidden h-screen flex items-center">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-20">
        
        {/* LEFT CONTENT */}
        <div className="max-w-xl space-y-7">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hello, I'm <span className="text-green-500">Anup</span>
            <br />
            <span className="text-green-500">Mondal</span>
          </h1>

          {/* Typing subtitle */}
          <h2 className="text-2xl font-light tracking-wide flex items-center gap-3 whitespace-nowrap">
            <span className="text-gray-300">Creative</span>

            <span className="text-green-500 font-semibold inline-flex items-center">
              <span className="h-[28px] inline-block overflow-hidden">
                {words[index].slice(0, subIndex)}
              </span>
              <span
                aria-hidden
                className={`ml-1 inline-block w-1 h-6 ${
                  blink ? "bg-green-500" : "bg-transparent"
                } rounded-sm transition`}
              />
            </span>
          </h2>

          <p className="text-gray-300 leading-relaxed tracking-wide">
            I craft clean and modern web experiences with smooth UI,
            high-quality animations, and pixel-perfect attention to detail.
            Focused on performance, accessibility, and delightful interactions.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <a
              href="#portfolio"
              className="px-7 py-3 bg-green-600 rounded-full hover:bg-green-700 transition shadow-lg shadow-green-600/20 inline-flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
              View My Work
            </a>

            <a
              href="#contact"
              className="px-7 py-3 border-2 border-green-500 rounded-full hover:bg-white/10 transition inline-flex items-center gap-2"
            >
              Get In Touch
            </a>
          </div>

          {/* Social icons */}
          <div className="flex gap-5 pt-3">
            <img src={Facebook} className="w-10 opacity-90 hover:opacity-100 transition" />
            <img src={Instagram} className="w-10 opacity-90 hover:opacity-100 transition" />
            <img src={Linkedin} className="w-10 opacity-90 hover:opacity-100 transition" />
          </div>
        </div>

        {/* RIGHT — IMAGE + BADGES */}
        <div className="relative flex-shrink-0">
          
          {/* Soft Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[420px] h-[420px] rounded-full bg-green-400/20 blur-2xl"></div>
          </div>

          {/* Glass Card */}
          <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 
                          rounded-3xl p-6 shadow-[0_0_40px_rgba(0,255,140,0.1)]">
            
            <img
              src={Profile}
              className="rounded-2xl w-[300px] md:w-[380px] object-cover 
                         shadow-[0_10px_40px_rgba(0,255,120,0.15)]"
            />

            {/* FLOATING TECH ICONS */}
            <div className="relative mt-6 h-20 flex items-center justify-center overflow-hidden">
              <div className="flex gap-10 animate-slide">
                <img src={ReactLogo} className="w-12 opacity-80 hover:opacity-100 transition" />
                <img src={TailwindLogo} className="w-12 opacity-80 hover:opacity-100 transition" />
                <img src={JsLogo} className="w-12 opacity-80 hover:opacity-100 transition" />
                <img src={NodeLogo} className="w-12 opacity-80 hover:opacity-100 transition" />
                <img src={TsLogo} className="w-12 opacity-80 hover:opacity-100 transition" />
              </div>
            </div>

            {/* BADGES */}
            <div className="absolute top-6 right-6 bg-white/10 border border-white/20 
                            px-4 py-2 rounded-xl text-sm font-semibold text-green-300 
                            shadow-lg backdrop-blur-xl animate-[float_4s_ease-in-out_infinite]">
              ⭐ Design
            </div>

            <div className="absolute bottom-6 right-6 bg-white/10 border border-white/20 
                            px-4 py-2 rounded-xl text-sm font-semibold text-green-300 
                            shadow-lg backdrop-blur-xl animate-[float_4s_ease-in-out_infinite_1s]">
              💡 Ideas
            </div>

            <div className="absolute left-[-70px] top-1/2 -translate-y-1/2 
                            bg-white/10 border border-white/20 px-4 py-2 rounded-xl text-sm 
                            font-semibold text-green-300 shadow-lg backdrop-blur-xl 
                            animate-[float_4s_ease-in-out_infinite_2s]">
              {"</>"} Code
            </div>
          </div>
        </div>
      </div>

      {/* KEYFRAMES */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }

          @keyframes slide {
            0% { transform: translateX(-20px); }
            50% { transform: translateX(20px); }
            100% { transform: translateX(-20px); }
          }

          .animate-slide {
            animation: slide 6s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}
