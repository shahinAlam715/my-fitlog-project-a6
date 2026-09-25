"use client";
import { FitContext } from "@/context/Contextprovider";
import { Ifitlog } from "@/type";
import { useContext } from "react";
import { MdSaveAlt } from "react-icons/md";
import { toast } from "react-toastify";

const SaveplanCard = ({ data }: { data: Ifitlog }) => {
  const { saveplan, setSaveplan } = useContext(FitContext);

  const isSaved = saveplan.some((item) => item.id === data.id);

  const handlesaveplan = () => {
    if (isSaved) {
      return;
    }
    setSaveplan([...saveplan, data]);
    toast.success(`${data.name} is Saved !`);
  };

  return (
    <div>
      <button
        onClick={() => handlesaveplan()}
        disabled={isSaved}
        className="px-4 py-2 my-4 rounded-xl text-[12px] font-bold border-2 border-[#374151]"
      >
        <span className="flex gap-4 text-[#9CA3AF] justify-center items-center">
          <i>
            <MdSaveAlt />
          </i>
          {isSaved ? "Saved Plan" : "Save for later"}
        </span>
      </button>
    </div>
  );
};

export default SaveplanCard;
