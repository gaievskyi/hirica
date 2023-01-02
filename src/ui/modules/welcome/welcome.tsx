import Link from "next/link";

import { MdOutlineWorkOutline } from "react-icons/md";

import { AuthShowcase } from "../auth-showcase";

type WelcomeProps = {
  greeting?: string;
};

export const Welcome: React.FC<WelcomeProps> = ({ greeting }) => (
  <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden text-center">
    <div
      className="container flex flex-col items-center justify-center gap-12 px-4 py-16"
      style={{
        transition: "1s ease all",
      }}
    >
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-[3rem]">
        Find talents and jobs with Web 3.0{" "}
        <span className="rounded-full bg-gradient-to-r from-blue-300 via-rose-200 to-orange-500 p-2 text-[#FDFBF5]">
          Hirica
        </span>
      </h1>
      <h2 className="text-xl font-light text-gray-600">
        Discover 10 999+ open positions and candidates.
      </h2>
      <div className="rounded-full bg-black text-white">
        <Link className="flex p-5 hover:bg-white/20" href="/sign-up">
          <div className="flex items-center justify-center gap-2 text-lg">
            <MdOutlineWorkOutline /> Start
          </div>
        </Link>
      </div>
      <div className="min-w-max border-2 border-black bg-green-200 p-5">
        <h3 className="">from server: {greeting}</h3>
        {/* <AuthShowcase /> */}
      </div>
    </div>
  </main>
);
