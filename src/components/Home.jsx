import React from "react";

export default function Home() {
  const user = {
    name: "Khimmie",
    career: "UI/UX Designer & Frontend Developer",
  };

  return (
    <div className="justify-center items-center flex h-screen text-white mt-4">
      {/* Container */}
      <div className="relative w-[77%] h-[67%] rounded-lg ">
        {/* Rainbow Border */}
        <div className="animated-rainbow-border p-[1px] rounded-lg 
                      absolute inset-0 z-10 pointer-events-none"
        ></div>
        {/* Content */}
        <div className="w-full h-full bg-white/7 backdrop-blur-md rounded-lg 
                      flex flex-col gap-4 justify-center p-6 shadow-lg shadow-white/10"
        >
          {/* Text */}
          <div className=""> HI , I'm </div>
          <span 
            className="text-8xl font-bold text-Green4/80 text-stroke-2 text-stroke-Green4"
          > {user.name}, </span>
          <div className="text-3xl">I'm a "{user.career}".</div>
        </div>
      </div>
    </div>
  );
}
