export default function AbstractBackground() {

  return (

    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">

         {/* top_R */}
      <div
        className="absolute w-[40rem] h-[40rem] 
                   bg-gradient-to-r from-Magenta to-MidnightPurple1 
                   -top-24 -right-24 
                   rounded rounded-s-lg filter blur-3xl opacity-40"
      ></div>

      {/* bot_R */}
      <div
        className="absolute w-80 h-80 bg-Lavender bottom-0 -right-48
                    rounded-full filter blur-3xl opacity-50"
      ></div>

       {/* middle_center */}
      <div
        className="absolute w-[45rem] h-[34rem] bg-gradient-to-tr from-MidnightPurple3 to-MidnightPurple1 
                   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   rounded-full filter blur-3xl opacity-20"
      ></div>

      {/* middle_L */}
      <div
        className="absolute w-32 h-54 bg-Magenta top-48 left-1/4 
                    rounded-b-md rounded-bl-xs filter blur-3xl opacity-20"
      ></div>

           {/* bot_L */}
      <div
        className="absolute w-123 h-123 bg-Green3 -bottom-45 -left-12 
                    rounded-tr-xs rounded-br-3xl rounded-bl rotate-68 filter blur-3xl opacity-20"
      ></div>
      
    </div>
  );
}
