import Link from "next/link";
import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { HiDownload } from "react-icons/hi";
import { SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <footer className=" mb-10 px-4 mt-4 text-center text-gray-500">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
        <div className="flex gap-6 sm:gap-16 mb-4">
          <Link
            href="mailto:careers@kaconex.com"
            className="text-[25px] sm:text-[30px] text-gray-500 flex items-center gap-2  rounded-full transition cursor-pointer hover:text-[#337ab7] dark:hover:text-[#337ab7] dark:text-white/60"
          >
            <GrMail />
          </Link>

          {/* <a
            className="text-[25px] sm:text-[30px] text-gray-500 flex items-center gap-2  rounded-full transition cursor-pointer hover:text-[#337ab7] dark:hover:text-[#337ab7] dark:text-white/60"
            href="https://www.linkedin.com/in/emmanuet/"
            target="_blank"
          >
            <BsLinkedin />
          </a> */}

          <a
            className="text-[25px] sm:text-[30px] text-gray-500 flex items-center gap-2  rounded-full transition cursor-pointer hover:text-[#337ab7] dark:hover:text-[#337ab7] dark:text-white/60"
            href="https://www.instagram.com/kaconex/"
            target="_blank"
          >
            <BsInstagram />
          </a>
        </div>
      </div>

      <small className="mb-2 text-xs block">
        &copy; 2026 Kaconex LLC. All rights reserved.
      </small>
    </footer>
  );
};

export default Footer;
