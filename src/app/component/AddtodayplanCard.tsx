"use client";
import { FitContext } from "@/context/Contextprovider";
import { Ifitlog } from "@/type";
import { useContext } from "react";
import { IoBagAdd } from "react-icons/io5";
import { toast } from "react-toastify";

const AddtodayplanCard = ({ data }: { data: Ifitlog }) => {
  const { addplan, setAddplan } = useContext(FitContext);

  const isAdded = addplan.some((item) => item.id === data.id);
  const handleaddplan = () => {
    if (isAdded) {
      return;
    }
    setAddplan([...addplan, data]);
    toast.success("Added to today's plan");
  };

  return (
    <div>
      <button
        onClick={() => handleaddplan()}
        disabled={isAdded}
        className="px-4 py-2 bg-[#C2F800] my-4 rounded-xl text-[12px] font-bold text-[#0F1115]"
      >
        <span className="flex gap-4 justify-center items-center">
          <i>
            <IoBagAdd />
          </i>
          {isAdded ? "Added to plan" : "Add to today,s plan"}
        </span>
      </button>
    </div>
  );
};

export default AddtodayplanCard;
