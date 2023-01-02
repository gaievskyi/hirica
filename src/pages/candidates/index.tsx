import Head from "next/head";

import { type NextPage } from "next";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

const Candidates: NextPage = () => (
  <>
    <Head>
      <title>Hirica candidates</title>
      <meta
        name="description"
        content="Explore Hirica candidates. Find your next IT job. +199000 active candidates."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex flex-col gap-5">
      <div className="gap flex items-center justify-center gap-3 py-4 px-16">
        <input
          name="candidate-search"
          type="text"
          placeholder="Frontend"
          className="flex min-w-full rounded-full border-2 border-black bg-[#FDFBF6] p-5"
        />
      </div>
      <main className="flex flex-col items-center justify-center bg-[#FDFBF6] px-64 pb-10">
        <div className="flex items-center justify-center gap-3 p-5">
          <button className="flex min-w-[75px] justify-center rounded-full bg-gray-400  p-5 text-center text-white">
            <span>All</span>
          </button>
          <button className="flex min-w-[75px] justify-center rounded-full bg-black p-5 text-center text-white">
            <span>Tinder mode</span>
          </button>
        </div>
        <div className="flex min-w-full flex-col items-center justify-center gap-5 rounded-full ">
          <div className="flex items-center justify-center gap-7">
            <div className="flex min-w-full gap-5 rounded-xl bg-black p-5 text-white">
              <span>A</span>
              <p className="flex min-w-[20%] font-semibold">Vue.js engineer</p>
              <div className="flex flex-col gap-5">
                <p className="text-xl font-thin">
                  A software engineer and the creator of Vue.js, an open source
                  JavaScript framework for building user interfaces.
                </p>
                <p className="text-sm">
                  I achieved my dream of becoming a software engineer by
                  learning programming on my own. I hope to inspire others to do
                  the same. What I love about programming is that it&apos;s a
                  creative process. You can build anything you can imagine. I
                  also love that it&apos;s a collaborative process. I&apos;ve
                  learned so much from my colleagues and friends in the
                  community.
                </p>
                <div>
                  Skills
                  <ul>
                    <li>Vue.js</li>
                    <li>Rust</li>
                    <li>Typescript</li>
                  </ul>
                </div>
              </div>
              <button className="">More</button>
            </div>
            <div>
              <FcLike fontSize={32} />
            </div>
          </div>

          <div className="flex min-w-full flex-col items-center justify-center gap-5 rounded-full ">
            <div className="flex items-center justify-center gap-7">
              <div className="flex min-w-full gap-5 rounded-xl bg-black p-5 text-white">
                <span>A</span>
                <p className="flex min-w-[20%] font-semibold">
                  WebAssembly engineer
                </p>
                <div className="flex flex-col gap-5">
                  <p className="text-xl font-thin">
                    A software engineer at Mozilla, works on WebAssembly and the
                    Rust programming language.
                  </p>
                  <p className="text-sm">
                    What is WebAssembly? WebAssembly is a new type of code that
                    can be run in modern web browsers — it is a low-level
                    assembly-like language with a compact binary format that
                    runs with near-native performance and provides languages
                    such as C/C++ and Rust with a compilation target so that
                    they can run on the web. Also, this is a thing, which I am
                    working on right now.
                  </p>
                  <div>
                    Skills
                    <ul>
                      <li>WebAssembly</li>
                      <li>Rust</li>
                      <li>JavaScript</li>
                    </ul>
                  </div>
                </div>
                <button className="">More</button>
              </div>
              <div>
                <FcLikePlaceholder fontSize={32} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </>
);

export default Candidates;
