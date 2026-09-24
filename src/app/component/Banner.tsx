import Image from "next/image";
import banimg from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className="bg-black pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto p-4 items-center bg-[#262626] rounded-3xl">
        <div className="">
          <h4 className="font-bold text-[12px] text-[#C2F800]">
            WORKOUT LIBRARY
          </h4>
          <h2 className="font-[var(--font-oswald)] font-bold text-[40px] text-[#ffff] my-3">
            TRAIN WITH INTENT. LOG
            <br />
            EVERY SET.
          </h2>
          <p className='font-normal text-[16px] text-[#9CA3AF] my-2'>
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today,s plan, and watch the week,s work add up.
          </p>
          <button className="px-4 py-2 bg-[#C2F800] my-4 rounded-[5px] text-black text-[12px] font-bold">BROWSE WORKOUTS</button>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image src={banimg} alt="banimg" height={334} width={334} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
