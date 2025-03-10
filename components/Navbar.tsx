"use client";
// Library Import
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
// Icons Import
import {
  FiShoppingCart,
  FiUser,
  FiSearch,
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileShopOpen, setIsMobileShopOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openMenu = () => {
    setMenuAnimation("animate-slide-in");
    setIsMobileMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuAnimation("animate-slide-out");
    setTimeout(() => setIsMobileMenuOpen(false), 300);
  };

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between border-b relative z-20">
      {/* Left section */}
      <div className="flex items-center gap-4">
        {/* Mobile menu icon */}
        <button className="lg:hidden" onClick={openMenu}>
          <FiMenu size={24} />
        </button>

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold font-garamond italic pr-5">
          ReWear
        </Link>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-6 text-sm text-gray-700 relative">
          <li className="relative group cursor-pointer">
            Shop ▼
            <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <ul className="space-y-4 text-sm w-full">
                <li className="border-b-[1px] pb-2 hover:font-bold">
                  <Link href={"/category"}>
                    Men&apos;s Fashion
                  </Link>
                </li>
                <li className="border-b-[1px] pb-2 hover:font-bold">
                  <Link href={"/category"}>
                    Women&apos;s Fashion
                  </Link>
                </li>
                <li  className="border-b-[1px] pb-2 hover:font-bold">
                  <Link href={"/category"}>
                    Accessories
                  </Link>
                </li>
                <li className="border-b-[1px] pb-2 hover:font-bold">
                  <Link href={"/category"}>
                    Shoes
                  </Link>
                </li>
                <li className="hover:font-bold">
                  <Link href={"/category"}>
                    Outerwear
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <Link 
            className="cursor-pointer"
            href={"/catalog"}
          >
            Catalog
          </Link>
          <Link 
            className="cursor-pointer"
            href={"/article"}
          >
            Article
          </Link>
          <Link 
            className="cursor-pointer"
            href={"/trade"}
          >
            Trade
          </Link>
          <Link 
            className="cursor-pointer"
            href={"/history"}
          >
            History
          </Link>
          <Link 
            className="cursor-pointer"
            href={"/chat"}
          >
            Chat
          </Link>
        </ul>
      </div>

      {/* Mobile search input */}
      {isSearchOpen && (
        <div
          ref={searchRef}
          className="absolute top-full left-0 w-full p-4 bg-[#e9e9e7] shadow-md lg:hidden"
        >
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full bg-gray-100 font-light rounded-full px-5 py-2 text-sm focus:outline-none"
          />
        </div>
      )}

      {/* Desktop search bar */}
      <div className="hidden lg:flex flex-1 mx-10">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full bg-gray-100 font-light rounded-full px-5 py-2 text-sm focus:outline-none"
        />
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        <button
          className="lg:hidden"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <FiSearch size={20} />
        </button>
        <Link href="/cart">
          <FiShoppingCart size={20} />
        </Link>
        <Link href={"/profile"}>
          <button>
            <FiUser size={20} />
          </button>
        </Link>
      </div>

      {/* Full-screen Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`fixed inset-0 bg-[#e9e9e7] z-50 p-6 ${menuAnimation}`}>
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="text-2xl font-bold font-garamond italic">
              ReWear
            </Link>
            <button onClick={closeMenu}>
              <FiX size={24} />
            </button>
          </div>
          <ul className="space-y-6 text-lg text-gray-800">
            <li className="border-b-[#d6d6d6] border-b-2 pb-4">
              <button
                className="flex items-center justify-between w-full"
                onClick={() => setIsMobileShopOpen(!isMobileShopOpen)}
              >
                Shop{" "}
                <FiChevronDown
                  className={`${
                    isMobileShopOpen ? "transform rotate-180" : ""
                  } transition-transform`}
                />
              </button>
              {isMobileShopOpen && (
                <ul className="pl-4 mt-2 space-y-2 text-base text-gray-600">
                  <li className="pb-2 border-b-2 border-b-[#d6d6d6]">
                    <Link href={"/category"}>
                      Men&apos;s Fashion
                    </Link>
                  </li>
                  <li className="pb-2 border-b-2 border-b-[#d6d6d6]">
                    <Link href={"/category"}>
                      Women&apos;s Fashion
                    </Link>
                  </li>
                  <li className="pb-2 border-b-2 border-b-[#d6d6d6]">
                    <Link href={"/category"}>
                      Accessories
                    </Link>
                  </li>
                  <li className="pb-2 border-b-2 border-b-[#d6d6d6]">
                    <Link href={"/category"}>
                      Shoes
                    </Link>
                  </li>
                  <li>
                    <Link href={"/category"}>
                      Outerwear
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link 
                className="cursor-pointer"
                href={"/catalog"}
              >
                Catalog
              </Link>
            </li>
            <li>
              <Link 
                className="cursor-pointer"
                href={"/article"}
              >
                Article
              </Link>
            </li>
            <li>
              <Link 
                className="cursor-pointer"
                href={"/trade"}
              >
                Trade
              </Link>
            </li>
            <li>
              <Link 
                className="cursor-pointer"
                href={"/history"}
              >
                History
              </Link>
            </li>
            <li>
              <Link 
                className="cursor-pointer"
                href={"/chat"}
              >
                Chat
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
