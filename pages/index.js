import Head from "next/head";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Scrip AI — AI TikTok, Reel & YT Shorts Script Writer</title>
        <meta
          name="title"
          content="Scrip AI — AI TikTok, Reel & YT Shorts Script Writer"
        />
        <meta
          name="description"
          content="10X faster & better way to write viral 30 sec short video script for Instagram Reel, TikTok and Youtube shorts"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scripai.com/" />
        <meta
          property="og:title"
          content="Scrip AI — AI TikTok, Reel & YT Shorts Script Writer"
        />
        <meta
          property="og:description"
          content="10X faster & better way to write viral 30 sec short video script for Instagram Reel, TikTok and Youtube shorts"
        />
        <meta
          property="og:image"
          content="https://scripai.com/scrip-ai-cover.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://scripai.com/" />
        <meta
          property="twitter:title"
          content="Scrip AI — AI TikTok, Reel & YT Shorts Script Writer"
        />
        <meta
          property="twitter:description"
          content="10X faster & better way to write viral 30 sec short video script for Instagram Reel, TikTok and Youtube shorts"
        />
        <meta
          property="twitter:image"
          content="https://scripai.com/scrip-ai-cover.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="https://scripai.com/favicon.png" />

        <meta
          name="google-site-verification"
          content="Yp9e-xgEgjFSdaOwKgO0bv66QN5ScCpFxlGr0F8qUWk"
        />
      </Head>
      <main className="m-auto flex max-w-5xl flex-col px-4">
        {/* <div className=" p-2 w-full text-center bg-yellow-400">NOTE: Due to overwhelming response we are out of capacity right now 🔥🔥🔥 please check us after 4 hours</div> */}
        <nav className="flex row justify-between items-center py-4">
          <a href="/">
            <span className="font-medium smd:text-xl py-2 px-4 text-white bg-black cursor-pointer rounded-full rounded-tl-sm ">
              WHOIS_IP
            </span>
          </a>
          <span>
            <ul className="flex row items-center gap-4 cursor-pointer">
              <li className="hidden sd:inline">
                <a
                  href="https://www.producthunt.com/posts/scrip-ai?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-scrip&#0045;ai"
                  target="_blank"
                >
                  <img
                    className="w-36"
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=384573&theme=light"
                  />
                </a>
              </li>
              <li className="hover:font-semibold text-sm px-3 py-1 border border-black rounded-full">
                <a href="https://tally.so/r/n0d8bZ" target="_blank">
                  I'm feeling Luck!
                </a>
              </li>
            </ul>
          </span>
        </nav>
        <div className="flex flex-col items-center justify-center gap-6 p-2 py-20 ">
          <div className="line flex flex-col text-center text-base font-extrabold xs:text-lg sdm:text-3xl sm:gap-3 md:text-4xl mdx:text-5xl ">
            <span>WHOIS_IP </span>
            <span className="text-sm">
              WHOIS Domain Lookup, Nameserver Lookup & IP Tools <br />
            </span>
          </div>
          <form className="text-gray-600 w-full sm:w-3/4 rounded-full border-2 sm:border-2 border-black flex justify-around items-center px-2">
            <input
              type="text"
              name="url"
              title="Please enter correct tiktok url"
              placeholder="type domain name or paste url..."
              className="w-full h-12 px-4 m:h-14 rounded-l-full text-sm font-light focus:outline-none text-black placeholder:text-slate-600 placeholder:font-light"
              value={value}
              onChange={handleInput}
              autoComplete="off"
            />
            <span calssName="flex items-center">
              <button
                disabled={true}
                type="submit"
                className="cursor-pointer px-4 bg-black w-min flex justify-center h-8 m:h-10 items-center rounded-full text-white"
              >
                <span calssName="mr-1">Search</span>
              </button>
            </span>
          </form>
          <div className="text-xs">
            recently searched:{" "}
            <span className="text-blue-500 cursor-pointer">
              sagarjaid.com scripai.com careerdekho.ai
            </span>
          </div>
          <div className="flex text-sm items-center gap-2 pt-10">
            <a href="https://www.linkedin.com/in/sagarjaid/" target="_blank">
              dev: sagar jaid
            </a>
            <span>|</span>

            <a href="https://scripai.com/privacy" target="_blank">
              privacy policy
            </a>
            <span>|</span>
            <a href="https://scripai.com/tc" target="_blank">
              terms and conditions
            </a>
            <span>|</span>
            <a href="https://scripai.com/gdrp" target="_blank">
              GDRP policy
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
