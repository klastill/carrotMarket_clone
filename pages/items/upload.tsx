import type { NextPage } from "next";

const ItemUpload: NextPage = () => {
  return (
    <div className="px-4 py-16">
      <div>
        <label className="w-full cursor-pointer flex items-center justify-center border-gray-300 border-2 border-dashed h-48 rounded-md text-gray-600 hover:text-orange-400 hover:border-orange-400">
          <svg
            className="h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input type="file" className="hidden" />
        </label>
      </div>
      <div className="my-4">
        <label
          htmlFor="price"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Price
        </label>
        <div className="rounded-md shadow-sm relative flex items-center">
          <div className="absolute left-0 pl-3 pointer-events-none">
            <span className="text-gray-700 text-sm">$</span>
          </div>
          <input
            id="price"
            type="text"
            placeholder="0.00"
            className="appearance-none pl-8 w-full px-4 py-2 border border-gray-400 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
          />
          <div className="absolute right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-700 text-sm">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label
          htmlFor="desc"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="desc"
          className="shadow-sm w-full border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-transparent"
          rows={4}
        />
      </div>
      <button className="w-full mt-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-orange-400 hover:bg-orange-500 border border-transparent shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">Upload product</button>
    </div>
  );
};

export default ItemUpload;
