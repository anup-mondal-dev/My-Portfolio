import React, { useEffect, useState } from "react";

// Images
import Profile from "../assets/Profile.jpeg";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import Linkedin from "../assets/Linkedin.png";

// Tech Icons
import ReactLogo from "../assets/react.png";
import TailwindLogo from "../assets/tailwind.png";
import JsLogo from "../assets/js.png";
import NodeLogo from "../assets/node.png";
import TsLogo from "../assets/ts.png";
import Mongo from "../assets/mongo.png";
import Kotlin from "../assets/kotlin.png";
import Android from "../assets/Android.png";
import Git from "../assets/git.png";
import Github from "../assets/github.png";

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

  /* Typing animation */
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

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? DELETING_SPEED : TYPING_SPEED);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  /* blinking cursor */
  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(t);
  }, []);

  const techIcons = [
    ReactLogo, TailwindLogo, JsLogo, NodeLogo, TsLogo,
    Mongo, Kotlin, Android, Git, Github
  ];

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

          <p className="text-gray-300 leading-relaxed">
            I create clean, modern, and high-performing digital experiences with
            smooth UI animations and thoughtful design.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <a
              href="#portfolio"
              className="px-7 py-3 bg-green-600 rounded-full hover:bg-green-700 transition shadow-lg shadow-green-600/20"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-7 py-3 border-2 border-green-500 rounded-full hover:bg-white/10 transition"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 pt-3">
            <img src={Facebook} className="w-10 opacity-90 hover:opacity-100 transition" />
            <img src={Instagram} className="w-10 opacity-90 hover:opacity-100 transition" />
            <img src={Linkedin} className="w-10 opacity-90 hover:opacity-100 transition" />
          </div>
        </div>

        {/* RIGHT — IMAGE + FLOATING ICONS */}
        <div className="relative flex-shrink-0">
          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[420px] h-[420px] rounded-full bg-green-400/15 blur-2xl"></div>
          </div>

          {/* Image with floating icons */}
          <div className="relative w-fit">
            <div className="relative rounded-3xl overflow-visible">
              <img
                src={Profile}
                className="rounded-2xl w-[300px] md:w-[380px] object-cover shadow-[0_10px_40px_rgba(0,255,120,0.15)]"
              />

              {/* Circular orbit floating icons */}
              {techIcons.map((icon, idx) => {
                const angle = (idx / techIcons.length) * 2 * Math.PI;
                const radius = 160; // distance from center
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                return (
                  <div
                    key={idx}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      animation: `floatCircular ${6 + idx}s linear infinite`,
                    }}
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shadow-lg backdrop-blur-md hover:scale-110 transition">
                      <img src={icon} className="w-6" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>
{`
  @keyframes floatCircular {
    0% { 
      transform: rotate(0deg) translate(140px) rotate(0deg);
    }
    100% { 
      transform: rotate(360deg) translate(140px) rotate(-360deg);
    }
  }
`}
</style>

    </section>
  );
}
