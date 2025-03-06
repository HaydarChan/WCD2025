"use client";

const Footer = () => {
  return (
    <footer className="bg-[#be8c72] text-white shadow-sm dark:bg-gray-900 mt-20 p-6">
      <div className="w-full max-w-screen-xl mx-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Title without logo */}
          <span className="font-garamond font-bold italic self-center text-2xl whitespace-nowrap dark:text-white mb-4 sm:mb-0">
            ReWear
          </span>

          {/* Links */}
          <ul className="flex flex-wrap items-center mb-6 text-xs md:text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* Copyright */}
        <span className="block text-xs md:text-sm text-white sm:text-center dark:text-gray-400">
          © 2025
          <a href="" className="hover:underline ml-1">
            ReWear™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
