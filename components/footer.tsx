import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-gray-50 px-5 py-10 text-gray-500">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8">
          {/* Brand */}
          <div className="text-center">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-gray-950"
            >
              Kaconex
            </Link>

            <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
              Building the future through technology and creativity.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link
              href="/privacy-policy"
              className="transition hover:text-[#12a555]"
            >
              Privacy Policy
            </Link>

            <Link href="/terms" className="transition hover:text-[#12a555]">
              Terms & Conditions
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <Link
              href="mailto:careers@kaconex.com"
              aria-label="Email Kaconex"
              className="text-2xl text-gray-500 transition hover:text-[#12a555]"
            >
              <GrMail />
            </Link>

            <a
              href="https://www.instagram.com/kaconex/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kaconex on Instagram"
              className="text-2xl text-gray-500 transition hover:text-[#12a555]"
            >
              <BsInstagram />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-gray-300 pt-6 text-xs sm:flex-row">
          <p>© 2026 Kaconex LLC. All rights reserved.</p>

          <p className="sm:mr-14">United States</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
