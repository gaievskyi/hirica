import Link from "next/link";
import { useRef } from "react";
import { BiSearch } from "react-icons/bi";

export const Navigation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <nav
      data-testid="navigation"
      ref={containerRef}
      className="sticky top-0 left-0 z-[100] flex justify-center gap-2 p-2"
    >
      <div className="flex items-center justify-between gap-4 rounded-full border-2 border-[white] bg-black px-5 py-2 text-white">
        <div className="flex text-xs uppercase">
          <div>Hirica</div>
        </div>
      </div>
      {/* <div className="flex items-center justify-between gap-4 rounded-full border-2 border-[white] bg-gray-300 px-5 py-2 text-white">
        <BiNotification />
        <BiUser />
      </div> */}
      <div className="flex items-center justify-between rounded-full border-2 border-[white] bg-black px-5 py-2 text-white">
        <div className="flex gap-16 text-xs uppercase">
          <Link href="/candidates">Candidates</Link>
          <Link href="/jobs">Jobs</Link>
          <Link href="/statistics">Statistics</Link>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 rounded-full border-2 border-[white] bg-black px-5 py-2 text-white">
        <BiSearch />
      </div>
    </nav>
  );
};