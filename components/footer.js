import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row  items-center gap-2 text-sm py-10">
      <a href="https://www.linkedin.com/in/sagarjaid/" target="_blank">
        by Sagar Jaid
      </a>
      <span className="hidden sm:inline">|</span>

      <a href="https://whoisos.com/privacy" target="_blank">
        Privacy Policy
      </a>
      <span className="hidden sm:inline">|</span>

      <a href="https://whoisos.com/tc" target="_blank">
        Terms and Conditions
      </a>
      <span className="hidden sm:inline">|</span>

      <a href="https://whoisos.com/gdrp" target="_blank">
        GDRP policy
      </a>
      <span className="hidden sm:inline">|</span>

      <a href="https://whoisos.com/sitemap.xml" target="_blank">
        sitemap
      </a>
      <div
        className="flex cursor-pointer items-center justify-end gap-2 fixed right-4 lg:right-10 bottom-10 "
        onClick={() => {
          window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
        }}
      >
        <svg
          className="h-10 sm:w-10"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-4.75a.75.75 0 001.5 0V8.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L6.2 9.74a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Footer;
