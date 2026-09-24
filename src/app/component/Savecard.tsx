import cardimg from "@/assets/card.png";
import Image from "next/image";
import { FaCheck, FaFire } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Savecard = () => {
  return (
    <div>
      <div className="border-b border-gray-700 bg-[#18181B] px-8 py-3 grid grid-cols-2 rounded-xl">
        <div className="flex gap-4 items-center">
          <div className="">
            <Image src={cardimg} alt="card" width={144} className="h-[80px]"/>
          </div>
          <div className="">
            <h2 className="font-bold text-[18px] text-[#FFFFFF] mb-3">
              BARBELL BENCH PRESS
            </h2>
            <p className="font-normal text-[#9CA3AF] text-[12px] my-2">
              Barbell, Bench
            </p>

            <div className="grid grid-cols-3 items-center gap-4">
              <span className="flex gap-2 text-[#9CA3AF] items-center">
                <i className="text-[#C2F800]">
                  <MdAccessTime />
                </i>
                25 min
              </span>
              <span className="flex gap-2 text-[#9CA3AF] items-center">
                <i className="text-[#C2F800]">
                  <FaFire />
                </i>
                180 kcal
              </span>
              <span className="flex gap-2 text-[#9CA3AF] items-center">
                <i className="text-[#C2F800]">
                  <IoIosStarOutline />
                </i>
                4.8
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="flex gap-4 my-4">
            <button className="px-4 py-2 my-4 rounded-xl text-[12px] font-bold border-2 border-[#374151]">
              <span className="flex gap-4 text-[#9CA3AF] items-center">
                Save for later
              </span>
            </button>
            <button className="px-4 py-2 bg-[#C2F800] my-4 rounded-xl text-[12px] font-bold text-[#0F1115]">
              <span className="flex gap-4 items-center">
                <i>
                  <FaCheck />
                </i>{" "}
                Add to today,s plan
              </span>
            </button>
            <button className="px-4 py-2 my-4 rounded-xl text-[12px] font-bold text-[#FFFFFF]">
              <span className="flex gap-4 items-center">
                <i>
                  <RxCross2 className="text-[24px]"/>
                </i>
              </span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Savecard;
