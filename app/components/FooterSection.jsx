import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Image
          src="/images/favicon.png"
          alt="logo image"
          width={32}
          height={32}
        />
        <p className="text-slate-600">&copy;2024 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
