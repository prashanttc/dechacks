import React from "react";

const Prize = () => {
  return (
<div className="z-10 w-full xl:min-h-screen flex flex-col items-center px-10 mt-20 mb-20">
      <h1 className="text-white text-center font-bebas text-5xl md:text-7xl mb-5">
        learn and earn with us
      </h1>
      <h1 className="text-brand text-center text-md xl:text-xl font-jetbrains">
      Show off your skills and grab your share of the prize money:
      </h1>
      <div className=" xl:justify-between mt-20 xl:mt-32 w-full xl:w-[70%] flex gap-10 xl:gap-0 flex-wrap items-center justify-center ">
        <div className=" prize-box ">
          <div className="prize-image">yes</div>
          <h1 className="text-white font-bebas text-2xl xl:text-5xl">2nd prize</h1>
          <h1 className="text-brand font-jetbrains text-2xl">10,000</h1>
          <div className="px-5  py-2 border-2 text-white/60 border-white rounded-3xl w-fit">
            silver
          </div>
        </div>
        <div className=" xl:-mt-[50px] h-fit rounded-3xl bg-black border-2 border-brand w-[300px] flex flex-col p-10 items-center gap-5 ">
          <div className="prize-image">yes</div>
          <h1 className="text-white font-bebas text-5xl">1st prize</h1>
          <h1 className="text-brand font-jetbrains text-2xl">15,000</h1>
          <div className="px-5 py-2 border-2 text-yellow-500 border-white rounded-3xl w-fit">
            gold
          </div>
        </div>
        <div className=" prize-box">
          <div className="prize-image">yes</div>
          <h1 className="text-white font-bebas text-2xl xl:text-5xl">3rd prize</h1>
          <h1 className="text-brand font-jetbrains text-2xl">5000</h1>
          <div className="px-5 py-2 border-2 text-orange-500 border-white rounded-3xl w-fit">
            bronze
          </div>
        </div>
      </div>
    </div>

  );
};

export default Prize;
