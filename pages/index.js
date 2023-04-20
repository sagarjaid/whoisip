import Head from "next/head";
import React, { useState } from "react";
import { domainArr } from "@/components/domainArr";
import Footer from "@/components/footer";

export default function Home() {
  const [domain, setDomain] = useState();

  const [value, setValue] = useState();
  const [err, SetErr] = useState(false);

  const handleInput = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
    const domainName = getDomainName(e.target.value, domainArr);
    console.log(domainName);
    SetErr(!domainName);
    if (domainName?.domain) {
      setDomain(domainName?.domain);
    }
  };

  const handlekeyDown = (e) => {
    if (e.keyCode === 13) {
      domain && !err && (window.location.pathname = `/${domain}`);
    }
  };

  const handleUrl = () => {
    domain && !err && (window.location.pathname = `/${domain}`);
  };

  const getDomainName = (url, suffixes) => {
    // Find & remove protocol (http, ftp, etc.) and get domain
    let domain = "";
    if (url.includes("://")) {
      domain = url.split("/")[2];
    } else {
      domain = url.split("/")[0];
    }

    // Remove port number if exists
    domain = domain.split(":")[0];

    // Remove www. if exists
    domain = domain.replace(/^www\./i, "");

    // Check if domain name ends with any of the specified suffixes
    const validSuffix = suffixes.some((suffix) => domain.endsWith(suffix));
    if (!validSuffix || domain.includes(" ")) {
      return false;
    }

    const domainName = domain;

    // Get name without top-level domain

    const parts = domainName?.split(".");
    const name = parts.slice(0, -1).join(".");
    return {
      domain: domainName,
      name: name,
    };
  };

  return (
    <>
      <Head>
        <title>WHOIS_OS</title>
        <meta name="title" content="WHOIS OS - " />
        <meta
          name="description"
          content="WHOIS Domain Lookup, Nameserver Lookup & IP Tools"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://whoisos.com/" />
        <meta property="og:title" content="WHOIS_OS" />
        <meta
          property="og:description"
          content="WHOIS Domain Lookup, Nameserver Lookup & IP Tools"
        />
        <meta
          property="og:image"
          content="https://whoisos.com/whois-cover.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://whoisos.com/" />
        <meta property="twitter:title" content="WHOIS_OS" />
        <meta
          property="twitter:description"
          content="WHOIS Domain Lookup, Nameserver Lookup & IP Tools"
        />
        <meta
          property="twitter:image"
          content="https://whoisos.com/whois-cover.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="https://whoisos.com/favicon.png" />
      </Head>
      <main className="m-auto flex max-w-5xl flex-col px-4">
        <nav className="flex row justify-between items-center py-4">
          <a href="/">
            <span className="font-medium smd:text-xl py-2 px-4 text-white bg-black cursor-pointer rounded-full rounded-tl-sm ">
              WHOIS_OS
            </span>
          </a>
          <span>
            <ul className="flex row items-center gap-4 cursor-pointer">
              <li className="hidden sd:inline">
                <a
                  href="https://www.producthunt.com/posts/whois_os?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-whois&#0095;os"
                  target="_blank"
                >
                  <img
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=389333&theme=light"
                    className="w-36"
                  />
                </a>
              </li>
              <li className="hover:font-semibold text-sm px-3 py-1 border border-black rounded-full">
                <a href="/" target="_blank">
                  I'm feeling Luck!
                </a>
              </li>
            </ul>
          </span>
        </nav>
        <div className="flex flex-col items-center justify-center gap-6 p-2 py-20 ">
          <div className="line flex flex-col text-center text-base font-extrabold xs:text-lg sdm:text-3xl sm:gap-3 md:text-4xl mdx:text-5xl ">
            <span>WHOIS_OS</span>
            <span className="text-sm">
              WHOIS Domain Lookup, Nameserver Lookup & IP Tools <br />
            </span>
          </div>
          <div className="text-gray-600 w-full sm:w-3/4 rounded-full border-2 sm:border-2 border-black flex justify-around items-center px-2">
            <input
              type="text"
              name="url"
              onKeyDown={handlekeyDown}
              title="Please enter correct tiktok url"
              placeholder="type domain name or paste url..."
              className="w-full h-12 px-4 m:h-14 rounded-l-full text-sm font-light focus:outline-none text-black placeholder:text-slate-600 placeholder:font-light"
              value={value}
              onChange={handleInput}
              autoComplete="off"
            />
            <span className="flex items-center">
              <button
                onClick={handleUrl}
                className="cursor-pointer px-4 bg-black w-min flex justify-center h-8 m:h-10 items-center rounded-full text-white"
              >
                <span className="mr-1">Search</span>
              </button>
            </span>
          </div>
          {err && value && (
            <div className="text-xs text-red-600">
              please enter valid domain name!
            </div>
          )}
          <div className=" text-center text-xs">
            recently searched:{" "}
            <span className="text-blue-500 cursor-pointer">
              <a className="mr-1" href="/scripai.com">
                scripai.com
              </a>
              <a href="/careerdekho.ai">careerdekho.ai</a>
            </span>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
