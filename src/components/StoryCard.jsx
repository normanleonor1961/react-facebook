import React from "react";

export default function StoryCard({ src, profile }) {
  return (
    <div
      className="relative md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x transition duration-200
          transform ease-in hover:scale-105 hover:animate-pulse"
    >
      <img
        src={profile}
        alt="user"
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-2 left-2 w-10 h-10 object-cover"
      />
      <img
        src={src}
        alt="story"
        className="brightness-75 rounded-full lg:rounded-3xl h-10 w-10 object-cover md:h-56 md:w-56"
      />
    </div>
  );
}
