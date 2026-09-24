"use client";
import { FitContext } from "@/context/Contextprovider";
import { Ifitlog } from "@/type";
import Image from "next/image";
import { useContext } from "react";
import { FaCheck, FaFire } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

const Myplaincard = ({allAddplan}:{allAddplan:Ifitlog[]}) => {
  const { addplan, setAddplan } = useContext(FitContext);

  const handledelete = (plan: Ifitlog) => {
    const removeData = addplan.filter((item) => item.id !== plan.id);
    setAddplan(removeData);
    toast.warning(`Plan is remove !`);
  };

  return (
    <div>
      {allAddplan.map((plan: Ifitlog, i: number) => (
        <div
          key={i}
          className="border-b border-gray-700 my-4 bg-[#18181B] px-8 py-3 grid grid-cols-1 md:grid-cols-2 rounded-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
            <div className="">
              <Image
                src={plan.image}
                alt="card"
                width={144}
                height={80}
                className="h-20"
              />
            </div>
            <div className="">
              <h2 className="font-bold md:text-[18px] text-[#FFFFFF] mb-3">
                {plan.name}
              </h2>
              <p className="font-normal text-[#9CA3AF] md:text-[12px] my-2">
                {plan.equipment}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
                <span className="flex gap-2 text-[#9CA3AF] items-center">
                  <i className="text-[#C2F800]">
                    <MdAccessTime />
                  </i>
                  {plan.duration}min
                </span>
                <span className="flex gap-2 text-[#9CA3AF] items-center">
                  <i className="text-[#C2F800]">
                    <FaFire />
                  </i>
                  {plan.caloriesBurned}kcal
                </span>
                <span className="flex gap-2 text-[#9CA3AF] items-center">
                  <i className="text-[#C2F800]">
                    <IoIosStarOutline />
                  </i>
                  {plan.rating}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="block md:flex gap-4 my-4">
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
                    <RxCross2
                      className="text-[24px]"
                      onClick={() => handledelete(plan)}
                    />
                  </i>
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Myplaincard;
