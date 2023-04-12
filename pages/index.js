import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
      <nav className="flex items-center justify-between py-4">
        <a href="/">
          <img src="/scrip.svg" className="w-[80px]" />
        </a>
        <div>
          <ul className="flex items-center gap-4 text-sm">
            {/* <li className="cursor-pointer">Pricing</li> */}
            <ll className="rounded-md bg-rose-50 p-1 px-2">
              <a href="/new">What's new</a>
            </ll>
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
            <li className="flex w-fit items-center gap-1 rounded-full bg-rose-500 p-1 px-3	 text-white shadow-sm ">
              <a href="/app">Try for free!</a>
              <a href="/app">
                <svg
                  className="w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center gap-6 p-2 py-20 ">
        <div className="line flex flex-col text-center text-base font-extrabold xs:text-lg sdm:text-3xl sm:gap-3 md:text-4xl mdx:text-5xl ">
          {/* <span> 10X faster & better way to write viral </span>
          <span> 30 sec short video script for </span> */}
          <span>10X faster way to write </span>
          <span>short video script for </span>
          <spn className="text-rose-500">
            <Typewriter
              options={{
                strings: ["Instagram Reels", "TikTok", "Youtube Shorts"],
                autoStart: true,
                loop: true,
              }}
            />
          </spn>
        </div>
        <p className="text-center text-xs sm:text-base">
          Create short videos 30-sec to 60-sec scripts in 1 minutes!
        </p>
        <div className="flex w-fit items-center justify-around rounded-full bg-rose-600 p-2 px-4	text-white shadow-xl hover:bg-rose-700 ">
          <a href="/app">Start for Free!</a>
          <svg
            className="w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </div>
        <div className="flex flex-col items-center gap-1 text-center text-xs text-gray-600 sm:text-base">
          <span>✓ No credit card required</span>
          <span>✓ No login is required</span>
        </div>
        <a
          className="sd:hidden"
          href="https://www.producthunt.com/posts/scrip-ai?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-scrip&#0045;ai"
          target="_blank"
        >
          <img
            className="w-36"
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=384573&theme=light"
          />
        </a>

        <img src="/trs.png" className="w-[30%] py-6" />

        <iframe
          className="aspect-video w-11/12 rounded-xl border-4 border-rose-600 bg-rose-600"
          title="Scrip AI — AI TikTok, Reel &amp; YT Shorts Script Writer"
          src="https://www.youtube.com/embed/m2Fl9i7CHTY"
          frameBorder="0"
        ></iframe>

        <div className="pt-10">
          <div className="text-center font-bold xs:text-lg sdm:text-3xl md:text-4xl">
            Loved by Creators & Product Hunters
          </div>
          <img src="/love.png" className="hidden w-full py-10 md:block " />
          <img src="/love-mobile.png" className="w-full py-10 md:hidden " />
        </div>
        <div className=" flex w-[100%] flex-col items-center gap-6 rounded-xl bg-rose-600 py-10 px-2 text-center text-white xs:text-lg sdm:text-3xl">
          Stop wasting time & start creating
          <br /> short video scripts for FREE!
          <div className="flex w-fit items-center justify-around rounded-full bg-white p-2 px-4 text-lg	text-black ">
            <a href="/app" className="text-md">
              Try Scrip!
            </a>
            <svg
              className="w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center gap-1 text-center text-xs text-gray-200 ">
            <span>✓ No credit card required</span>
            <span>✓ No login is required</span>
          </div>
        </div>
        <div className="flex items-center gap-2 pt-10">
          <a href="https://www.linkedin.com/in/sagarjaid/" target="_blank">
            Made with ❤️ by Sagar Jaid
          </a>
          <span>|</span>

          <a href="https://scripai.com/privacy" target="_blank">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="https://scripai.com/tc" target="_blank">
            Terms and Conditions
          </a>
          <span>|</span>
          <a href="https://scripai.com/gdrp" target="_blank">
            GDRP Policy
          </a>
        </div>
      </div>
    </main>
  </>
  )
}
