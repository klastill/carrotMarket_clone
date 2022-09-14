import type { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <form className="px-4 py-10">
      <textarea
        className="shadow-sm w-full border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-transparent"
        rows={4}
        placeholder="Ask a question!"
      />
      <button className="w-full mt-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-orange-400 hover:bg-orange-500 border border-transparent shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
        Submit
      </button>
    </form>
  );
};

export default Write;
