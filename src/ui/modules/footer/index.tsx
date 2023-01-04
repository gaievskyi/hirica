import Link from 'next/link'

export const Footer: React.FC = () => (
  <footer className="flex w-full items-center justify-center bg-black py-16 ">
    <div className="flex w-full flex-col px-4 text-white md:w-2/3">
      <div className="w-full text-7xl font-bold">
        <h1 className="w-full md:w-2/3">
          Be in touch with our development team
        </h1>
      </div>
      <div className="mt-8 flex flex-col md:flex-row md:justify-between">
        <p className="w-full text-gray-400 md:w-2/3">
          Subscribe to our newsletter to get the latest news and updates from
          our team.
        </p>
        <div className="w-44 pt-6 md:pt-0">
          <a className="flex items-center justify-center rounded-lg bg-white px-10 py-3 text-center text-black shadow">
            Subscribe
          </a>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mt-24 mb-12 flex flex-row justify-between">
          <h1 className="text-2xl font-bold">Hirica</h1>
          <Link
            href="/candidates"
            className="hidden cursor-pointer uppercase text-gray-600 hover:text-white md:block"
          >
            Candidates
          </Link>
          <Link
            href="/jobs"
            className="hidden cursor-pointer uppercase text-gray-600 hover:text-white md:block"
          >
            Jobs
          </Link>
          <Link
            href="/statistics"
            className="hidden cursor-pointer uppercase text-gray-600 hover:text-white md:block"
          >
            Statistics
          </Link>
          <div className="flex flex-row items-center justify-between space-x-8">
            <a href="https://linked.in/co/hirica"></a>
            <a href="https://www.youtube.com/channel/UCjtCbnkIaiCJgj13sEZ9iqw">
              <svg
                width="13"
                height="9"
                viewBox="0 0 13 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7355 1.415C12.6616 1.14357 12.517 0.896024 12.3162 0.697014C12.1154 0.498004 11.8654 0.354468 11.5911 0.280692C10.5739 0.00450089 6.5045 4.87928e-06 6.5045 4.87928e-06C6.5045 4.87928e-06 2.43578 -0.00449139 1.41795 0.259496C1.14379 0.336667 0.894302 0.482233 0.693428 0.68222C0.492554 0.882207 0.347041 1.1299 0.270859 1.40152C0.00259923 2.40737 9.51671e-07 4.49358 9.51671e-07 4.49358C9.51671e-07 4.49358 -0.0025972 6.59006 0.263714 7.58564C0.413109 8.13609 0.851549 8.57094 1.40885 8.71931C2.43643 8.9955 6.49476 9 6.49476 9C6.49476 9 10.5641 9.00449 11.5813 8.74115C11.8557 8.6675 12.106 8.52429 12.3073 8.32569C12.5086 8.12709 12.6539 7.87996 12.729 7.60876C12.998 6.60355 12.9999 4.51798 12.9999 4.51798C12.9999 4.51798 13.0129 2.42086 12.7355 1.415ZM5.20282 6.42628L5.20607 2.57244L8.58823 4.50257L5.20282 6.42628Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
        <hr className="border-gray-600" />
        <p className="my-12 w-full text-center text-gray-600">
          Hirica &copy; {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </div>
  </footer>
)
