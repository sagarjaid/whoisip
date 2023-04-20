import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center gap-2 text-sm pt-10">
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
    </div>
  );
};

export default Footer;
