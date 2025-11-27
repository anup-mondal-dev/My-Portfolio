import React from "react";

function Footer() {
  return (
    <div className="bg-[#111a21] text-white flex flex-col justify-center items-center text-center py-4 space-y-3">
      <div className="text-sm">© All Rights Reserved</div>

      <div className="flex gap-4 justify-center">
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
          1
        </div>
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
          1
        </div>
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
          1
        </div>
      </div>
    </div>
  );
}

export default Footer;
