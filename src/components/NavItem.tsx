import React from "react";

const NavItem = ({ label }: { label: string }) => {
  return (
    <div className="hover:animate-pulse relative py-1 px-11 justify-center cursor-pointer items-center gap-1 hover:text-white text-black group">
      <span className="text-base tracking-[-0.96px] lowercase z-50">{label}</span>
      <div className="absolute inset-0 bg-blue-400 scale-x-0 -z-20 hover:text-white group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

export default NavItem;
