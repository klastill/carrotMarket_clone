import type { NextPage } from "next";

const EditProfile: NextPage = () => {
  return (
    <div className="py-10 px-4 space-y-4">
      <div className="flex items-center space-x-4">
        <div className="w-24 aspect-square bg-slate-200 rounded-3xl" />
        <label htmlFor="photo" className="cursor-pointer px-4 py-2 rounded-md border border-gray-400 shadow-sm text-sm font-medium text-gray-600 hover:text-orange-400 hover:border-orange-400">
          Change
          <input id="photo" type="file" className="hidden" accept="image/*" />
        </label>
      </div>
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email address
        </label>
        <input
          id="email"
          type="email"
          className="appearance-none w-full px-4 py-2 border border-gray-400 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
          required
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Phone number
        </label>
        <div className=" flex rounded-md shadow-sm">
          <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
            +82
          </span>
          <input
            id="input"
            type="number"
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none placeholder-gray-400 focus:outline-none focus:ring-orange-400 focus:border-orange-400"
            required
          />
        </div>
      </div>
      <button className="w-full mt-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-orange-400 hover:bg-orange-500 border border-transparent shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
        Update profile
      </button>
    </div>
  );
};

export default EditProfile;
