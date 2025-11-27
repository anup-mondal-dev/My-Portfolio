import React from "react";
import { Home, User, FileText, Briefcase, Images, Mail } from "lucide-react";

function Navbar() {
  const menu = [
    { name: "Home", icon: <Home size={22} /> },
    { name: "About", icon: <User size={22} /> },
    { name: "Resume", icon: <FileText size={22} /> },
    { name: "Services", icon: <Briefcase size={22} /> },
    { name: "Portfolio", icon: <Images size={22} /> },
    { name: "Contact", icon: <Mail size={22} /> },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex bg-[#0c1418]/60 backdrop-blur-xl px-8 py-4 rounded-3xl shadow-xl shadow-black/40 gap-8 border border-white/10">
        
        {menu.map((item, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center cursor-pointer hover:scale-125 transition-all duration-200"
          >
            {/* tooltip */}
            <span
              className="absolute -top-8 opacity-0 group-hover:opacity-100 text-white bg-[#0f2530] px-3 py-1 rounded-full text-xs 
              shadow-lg whitespace-nowrap transform scale-90 group-hover:scale-100 transition-all duration-200"
            >
              {item.name}
            </span>

            <div className="p-3 rounded-2xl hover:bg-green-600/20 text-gray-200 group-hover:text-green-500 transition">
              {item.icon}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Navbar;
