import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="justify-center items-start flex h-screen 
    text-nat flex-col gap-4 px-4 w-3/4 mx-auto text-center"
    >
      <h1> HI , I'm </h1>
      <span className="text-4xl font-bold text-rudy"> Khimmie </span>
      <div className=""></div>
    </div>
  );
}
