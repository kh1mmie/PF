import { use, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const user = {
    name: "Khimmie",
    career: "UI/UX Designer & Frontend Developer",
  };

  return (
    <div className="justify-center items-center flex h-screen text-white mt-4">
      <div 
        className="w-[77%] h-[70%] border border-white/20 
        shadow-lg shadow-white/10 rounded-lg 
        p-10 flex flex-col gap-4 justify-center
        bg-white/10 backdrop-blur-md"
      >
      <div className=""> HI , I'm </div>
      <span 
        className=
        "text-8xl font-bold text-Green4/57 text-stroke-2 text-stroke-Green4/80"
      > {user.name}, </span>
      <div className="text-3xl">I'm a "{user.career}".</div>
      </div>
    </div>
  );
}
