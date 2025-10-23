import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const user = {
    name: "Khimmie",
  };

  return (
    <div
      className="justify-center items-start flex h-screen 
    text-nat flex-col gap-4 px-4 text-center text-Ivory"
    >
      <div className=""> HI , I'm </div>
      <span className="text-4xl font-bold text-rudy"> {user.name} </span>
      <div className=""></div>
    </div>
  );
}
