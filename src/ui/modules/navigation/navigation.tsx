import Link from "next/link";
import { useState } from "react";

import { BiNotification, BiSearch, BiUser } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

export const Navigation: React.FC = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {showBanner && (
        <div className="flex items-center justify-center bg-gradient-to-r from-blue-300 via-rose-200 to-orange-500 py-3 text-center text-xs">
          <p>
            Get promoted to the top of the list with a{" "}
            <span className="font-bold underline">Hirica Pro</span> account
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
        className="sticky top-0 left-0 z-[100] mb-10 flex justify-center gap-2 p-2"
      >
        <Link
          href="/"
          className="flex items-center justify-between gap-4 rounded-full border-[white] bg-black px-5 py-2 text-xs uppercase text-white"
        >
          Hirica
        </Link>
        <Link
          href="/profile"
          className="flex items-center justify-between gap-4 rounded-full border-[white] bg-black px-5 py-2 text-white"
        >
          <BiNotification />
          <BiUser />
        </Link>
        <div className="flex items-center justify-between rounded-full border-[white] bg-black px-5 py-2 text-white">
          <div className="flex gap-16 text-xs uppercase">
            <Link href="/candidates">Candidates</Link>
            <Link href="/jobs">Jobs</Link>
            <Link href="/statistics">Statistics</Link>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 rounded-full border-[white] bg-black px-5 py-2 text-white">
          <BiSearch />
        </div>
      </nav>
    </>
  );
};
