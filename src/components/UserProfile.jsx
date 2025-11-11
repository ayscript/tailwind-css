import React from "react";

const UserProfile = () => {
  return (
    <div>
      <div className="bg-linear-to-r from-green-600 via-white to-green-600 w-full h-48"></div>
      <div className="w-32 h-32 rounded-full border-2 mx-auto -mt-16 bg-blue-500 flex items-center justify-center text-[64px] font-bold shadow-2xl">
        A
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <h1 className="font-bold">Ayomide Olaleye</h1>
        <p>FullStack AI/Web Developer</p>
        <p>Location: Ogun State, Nigeria</p>
      </div>
      <div className="flex items-center justify-center gap-3 mt-4">
        <div className="bg-gray-300 flex flex-col p-2 rounded text-center">
          <span className="font-bold text-xl">13K</span>
          <span className="text-sm">Followers</span>
        </div>
        <div className="bg-gray-300 flex flex-col p-2 rounded text-center">
          <span className="font-bold text-xl">200</span>
          <span className="text-sm">Posts</span>
        </div>
        <div className="bg-gray-300 flex flex-col p-2 rounded text-center">
          <span className="font-bold text-xl">58K</span>
          <span className="text-sm">Likes</span>
        </div>
      </div>
      <button className="bg-none border-2 px-2 rounded mx-auto block mt-3 cursor-pointer hover:bg-gray-300">
        Follow
      </button>
      <p className="text-center mt-2 w-1/2 mx-auto">
        I am a good Developer with passion to build AI powered applications, to solve various problems in the society.
        I am a good Developer with passion to build AI powered applications, to solve various problems in the society.
      </p>
    </div>
  );
};

export default UserProfile;
