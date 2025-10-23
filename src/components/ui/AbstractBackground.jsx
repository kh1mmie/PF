export default function AbstractBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {/* bot_L */}
      <div
        className="absolute w-[30rem] h-[30rem] 
                    bg-gradient-to-tr from-DeepNavyblue via-BlackBurry to-MidnightPurple1 
                    -bottom-[11rem] -left-[3rem] 
                    rounded-tl-[10rem] rounded-tr-[5rem] 
                    rounded-bl-[12rem] rounded-br-[8rem]
                    filter blur-3xl opacity-20"
      ></div>

      {/* middle_L */}
      <div
        className="absolute w-80 h-60
                    bg-radial-[at_30%_30%] from-Lavender via-bbMilk to-DeepNavyblue 
                    -top-24 left-1/4
                    rounded-tl-[40%] rounded-tr-[60%] 
                    rounded-bl-[70%] rounded-br-[30%] 
                    filter blur-3xl opacity-20"
      ></div>

      {/* top_R */}
      <div
        className="absolute w-[45rem] h-[60rem] 
                    bg-gradient-to-tl from-MidnightPurple via-bbMilk to-DeepNavyblue -top-24 -right-48 rotate-x-35 -rotate-y-13
                    rounded-tl-[90%] rounded-tr-[120%] 
                    rounded-bl-[30%] rounded-br-[67%]
                    filter blur-3xl opacity-30"
      ></div>
    </div>
  );
}
