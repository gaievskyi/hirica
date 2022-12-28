import { useRef } from "react";
import { BiUser, BiNotification } from "react-icons/bi";

export const Navigation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="sticky top-0 left-0 flex justify-center gap-2 p-2"
      style={{
        transition: "1s ease all",
      }}
    >
      <div className="flex items-center justify-between gap-4 rounded-full border-2 border-[white] bg-black px-10 text-white">
        <div className="flex text-xs uppercase">
          <div>Hirica</div>
        </div>
        <BiNotification />
        <BiUser />
      </div>
      <div className="flex items-center justify-between rounded-full border-2 border-[white] bg-black p-3 text-white">
        <div className="flex gap-16 text-xs uppercase">
          <div>Candidates</div>
          <div>Jobs</div>
          <div>Statistics</div>
        </div>
      </div>
    </div>
  );
};
