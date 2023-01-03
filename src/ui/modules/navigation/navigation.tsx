import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

import {
  BiNotification,
  BiSearch,
  BiAward,
  BiCertification,
} from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

export const Navigation: React.FC = () => {
  const { data: sessionData } = useSession();
  const { pathname } = useRouter();
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {showBanner && (
        <div className="flex items-center justify-center bg-gradient-to-r from-blue-300 via-rose-200 to-orange-500 py-5 text-center text-xs">
          <p>
            We are currently in <span className="font-semibold">Beta</span>. If
            you find any problem, please report them by sending a report to{" "}
            <a href="mailto:hirica@proton.me" className="text-black underline">
              hirica@proton.me
            </a>
          </p>
          <IoCloseOutline
            fontSize={24}
            className="absolute right-5 cursor-pointer"
            onClick={() => {
              setShowBanner(false);
            }}
          />
        </div>
      )}
      <nav
        data-testid="navigation"
        className="sticky top-0 left-0 z-[100] mb-10 flex select-none justify-center gap-2 p-1"
      >
        <Link
          href="/"
          className={`${
            pathname === "/" &&
            "bg-gradient-to-r from-blue-300 via-rose-200 to-orange-500"
          } flex items-center justify-between gap-4 rounded-full border-2 border-white bg-black px-5 py-2 text-xs uppercase text-white transition-all duration-500 ease-in-out hover:mx-3 hover:scale-110`}
        >
          Hirica
        </Link>
        {sessionData && (
          <>
            <div className="flex items-center justify-between gap-4 rounded-full border-2 border-white bg-black px-5 py-2 text-xs uppercase text-white transition-all duration-500 ease-in-out hover:mx-3 hover:scale-110">
              {sessionData?.user?.name && (
                <p className="text-xs uppercase">{sessionData.user.name}</p>
              )}
              <button
                className="rounded-full bg-black text-white hover:bg-black/80"
                onClick={() => signOut()}
              >
                Sign out
              </button>
            </div>
            <Link
              href="/profile"
              className={`${
                pathname === "/profile" &&
                "bg-gradient-to-r from-blue-300 via-rose-200 to-orange-500"
              } flex items-center justify-between gap-4 rounded-full border-2 border-white bg-black px-5 py-2 text-white transition-all duration-500 ease-in-out hover:mx-3 hover:scale-110`}
            >
              <BiNotification />
              <BiAward />
              <BiCertification />
            </Link>
          </>
        )}

        <div
          className={`${
            (pathname === "/candidates" ||
              pathname === "/jobs" ||
              pathname === "/statistics") &&
            "bg-gradient-to-r from-blue-300 via-rose-200 to-orange-500"
          } flex items-center justify-between gap-4 rounded-full border-2 border-white bg-black px-5 py-2 text-xs uppercase text-white transition-all duration-500 ease-in-out hover:mx-3 hover:scale-110`}
        >
          <div className="flex gap-16 text-xs uppercase">
            <Link
              href="/candidates"
              className={`${pathname === "/candidates" && "text-black"}`}
            >
              Candidates
            </Link>
            <Link
              href="/jobs"
              className={`${pathname === "/jobs" && "text-black"}`}
            >
              Jobs
            </Link>
            <Link
              href="/statistics"
              className={`${pathname === "/statistics" && "text-black"}`}
            >
              Statistics
            </Link>
          </div>
        </div>
        <button className="flex items-center justify-between gap-5 rounded-full border-2 border-white bg-black px-5 py-2 text-xs text-white transition-all duration-500 ease-in-out hover:mx-3 hover:scale-110">
          <BiSearch />
        </button>
      </nav>
    </>
  );
};
