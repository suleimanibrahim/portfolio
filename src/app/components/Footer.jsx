import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-6 flex justify-between items-center">
        <div className="w-20">
          <Image src="/suleimanpix.png" layout="responsive" quality={100} className="rounded-full  h-auto" alt="logo" width={50} height={50} />
        </div>
        <p className="text-slate-600">2024 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
