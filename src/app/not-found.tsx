import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-black px-4 text-center">
      <h1 className="text-[100px] font-bold leading-none text-[#C2F800]">
        404
      </h1>

      <h2 className="mt-6 text-3xl font-bold text-white">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-gray-400">
        Sorry, the page you are looking for does not exist or may have been
        moved.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-xl bg-[#C2F800] px-6 py-3 font-bold text-black transition hover:bg-[#b5ed00]"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;