import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  const navLabels = ["about", "services", "works"];
  return (
    <div className="flex w-full items-center justify-between py-4 px-[48px]">
      <div className="flex flex-col">
        <p className="text-black text-lg tracking-[-1.08px]">
          H<span className="font-semibold">rishi</span>kesh Vyshnav
        </p>
        <p className="capitalize text-sm tracking-[-0.84px]">creative digital designer & multimedia</p>
      </div>
      {/* --------------------- */}
      <div className="flex items-center">
        {navLabels.map((item) => (
          <NavItem label={item} key={item} />
        ))}
      </div>
      {/*  */}
      <div className="flex items-center cursor-pointer justify-end gap-[5px] ">
        <span className="text-[20px] tracking-[-1.2px] text-black peer">discuss about project</span>
        <img src="/arrow.svg" className="peer-hover:translate-x-10  peer-hover:-translate-y-20 transition-all duration-200" alt="" />
        {/* <img src="/arrow.svg" className='peer-hover:translate-x-0 peer-hover:translate-y-0 hidden peer-hover:block -translate-y-20 transition-all duration-200' alt="" /> */}
      </div>
    </div>
  );
};

export default Navbar;
