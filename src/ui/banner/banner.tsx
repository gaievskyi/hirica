import Link from "next/link";

export const Banner: React.FC = () => (
  <div className="flex flex-col items-center justify-center bg-black py-10 text-white">
    <h1 className="p-5 text-center text-5xl">Pay for hires only</h1>
    <h2>We charge 25% of candidate’s one-month salary.</h2>
    <div className="m-10">
      <Link
        className="flex rounded-full border-2 border-white bg-black p-5 text-white hover:bg-white/20"
        href="/sign-in"
      >
        <div className="flex items-center justify-center gap-2 text-lg">
          Find developers
        </div>
      </Link>
    </div>
  </div>
);
