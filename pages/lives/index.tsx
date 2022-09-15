import type { NextPage } from "next";

const Lives: NextPage = () => {
  return (
    <div className="py-10 px-4 space-y-2 divide-y-2">
      {new Array(10).fill(0).map((_, i) => (
        <div key={i} className="pt-4 space-y-1">
          <div className="w-full aspect-video bg-slate-200 rounded-md" />
          <h3 className="text-gray-700 text-lg">Let&apos;s try potatos</h3>
        </div>
      ))}
      <button className="fixed rounded-full bg-orange-400 bottom-12 right-8 p-4 text-white shadow-xl font-medium hover:bg-orange-500 transition-colors border-transparent">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Lives;
