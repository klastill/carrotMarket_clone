import type { NextPage } from "next";

const Community: NextPage = () => {
  return (
    <div className="py-16 px-4 space-y-8">
      {new Array(10).fill(0).map((_, i) => (
        <div key={i} className="flex flex-col items-start cursor-pointer">
          <span className="flex items-center px-2 py-1 rounded-full bg-gray-200 font-medium text-gray-800">
            동네질문
          </span>
          <div className="mt-2 text-gray-700 text-lg">
            <span className="font-medium text-orange-400">Q.</span> What is the
            best mandu restaurant?
          </div>
          <div className="mt-2 flex items-center justify-between w-full text-gray-700 font-medium text-sm border-b py-2">
            <div className="flex space-x-4 items-center text-gray-700">
              <span className="flex space-x-2 items-center">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>궁금해요 1</span>
              </span>
              <span className="flex space-x-2 items-center">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
                <span>답변 1</span>
              </span>
            </div>
            <div className="flex space-x-4 items-center">
              <span>니꼬</span>
              <span>18시간 전</span>
            </div>
          </div>
        </div>
      ))}

      <button className="fixed rounded-full bg-orange-400 bottom-12 right-8 p-4 text-white shadow-xl font-medium hover:bg-orange-500 transition-colors">
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
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Community;
