"use client";

import { useState } from "react";
import { useActiveSectionContext } from "@/context/active-section";
import { links } from "@/lib/data";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActiveLink = (link: (typeof links)[number]) => {
    return pathname === link.hash;
  };

  const handleLinkClick = (name: (typeof links)[number]["name"]) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-[999]">
      {/* Desktop / Mobile Navbar */}
      <motion.div
        className="
          fixed left-1/2 top-3
          flex h-[4rem] w-[calc(100%-1.5rem)]
          -translate-x-1/2 items-center justify-between
          rounded-2xl
          border border-gray-200/70
          bg-white/80
          px-4
          shadow-lg shadow-black/[0.03]
          backdrop-blur-xl
          dark:border-white/10
          dark:bg-gray-950/80
          sm:top-6
          sm:h-[3.5rem]
          sm:w-auto
          sm:min-w-[42rem]
          sm:rounded-full
          sm:px-5
        "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 18,
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="relative z-10 flex shrink-0 items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/kaconex.png"
            alt="Kaconex"
            width={250}
            height={25}
            priority
            className="h-10 w-auto object-contain sm:h-10"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:block">
          <ul className="flex items-center gap-1 text-[0.9rem] font-medium text-gray-500">
            {links.map((link) => {
              const isActive = isActiveLink(link);
              return (
                <motion.li
                  key={link.hash}
                  className="relative flex items-center justify-center"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <Link
                    href={link.hash}
                    className={clsx(
                      "relative flex items-center justify-center rounded-full px-4 py-2.5 transition-colors duration-200",
                      "hover:text-gray-950",
                      "dark:text-gray-400 dark:hover:text-white",
                      {
                        "text-gray-950 dark:text-white": isActive,
                      },
                    )}
                    onClick={() => handleLinkClick(link.name)}
                  >
                    {link.name}

                    {isActive && (
                      <motion.span
                        className="
                          absolute inset-0 -z-10
                          rounded-full
                          bg-gray-100
                          dark:bg-gray-800
                        "
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="
            flex h-10 w-10
            items-center justify-center
            rounded-full
            text-gray-800
            transition
            hover:bg-gray-100
            dark:text-gray-100
            dark:hover:bg-gray-800
            sm:hidden
          "
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMenuOpen ? (
              <motion.span
                key="close"
                initial={{
                  rotate: -90,
                  opacity: 0,
                  scale: 0.7,
                }}
                animate={{
                  rotate: 0,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  rotate: 90,
                  opacity: 0,
                  scale: 0.7,
                }}
                transition={{ duration: 0.2 }}
              >
                <FaTimes size={20} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{
                  rotate: 90,
                  opacity: 0,
                  scale: 0.7,
                }}
                animate={{
                  rotate: 0,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  rotate: -90,
                  opacity: 0,
                  scale: 0.7,
                }}
                transition={{ duration: 0.2 }}
              >
                <FaBars size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="
                fixed inset-0 z-[-1]
                bg-black/20
                backdrop-blur-sm
                sm:hidden
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu Panel */}
            <motion.nav
              className="
                fixed left-3 right-3 top-[5.5rem]
                overflow-hidden
                rounded-3xl
                border border-gray-200/70
                bg-white/95
                p-3
                shadow-2xl
                backdrop-blur-xl
                dark:border-white/10
                dark:bg-gray-950/95
                sm:hidden
              "
              initial={{
                opacity: 0,
                y: -15,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -15,
                scale: 0.97,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
            >
              <ul className="flex flex-col gap-1">
                {links.map((link, index) => {
                  const isActive = isActiveLink(link);

                  return (
                    <motion.li
                      key={link.hash}
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.2,
                      }}
                    >
                      <Link
                        href={link.hash}
                        onClick={() => handleLinkClick(link.name)}
                        className={clsx(
                          "relative flex w-full items-center rounded-2xl px-5 py-4 text-base font-medium transition",
                          "text-gray-600 hover:bg-gray-100 hover:text-gray-950",
                          "dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",
                          {
                            "bg-gray-100 text-gray-950 dark:bg-gray-800 dark:text-white":
                              isActive,
                          },
                        )}
                      >
                        {link.name}

                        {isActive && (
                          <motion.span
                            layoutId="mobileActiveSection"
                            className="
                              absolute right-5
                              h-2 w-2
                              rounded-full
                              bg-[#A8D03C]
                            "
                          />
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
