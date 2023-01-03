import Link from "next/link";

import { MdOutlineWorkOutline } from "react-icons/md";

type WelcomeProps = {
  greeting?: string;
};

export const Welcome: React.FC<WelcomeProps> = ({ greeting }) => (
  <main className="flex flex-col items-center justify-center overflow-hidden py-32 text-center">
    <div
      className="container flex flex-col items-center justify-center gap-8"
      style={{
        transition: "1s ease all",
      }}
    >
      <h1 className="text-5xl font-black">
        Find talents and jobs with{" "}
        <span className="rounded-full bg-gradient-to-r from-blue-300 via-rose-200 to-orange-500 p-2 text-[#FDFBF5]">
          Hirica
        </span>
      </h1>
      <p className="text-2xl ">Hirica is a Web 3.0 job search platform.</p>
      <div className="rounded-full bg-black text-white">
        <Link className="flex p-5 hover:bg-white/20" href="/start">
          <div className="text-md flex items-center justify-center gap-2">
            <MdOutlineWorkOutline /> Start
          </div>
        </Link>
      </div>
    </div>
  </main>
);
