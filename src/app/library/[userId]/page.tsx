import Image from "next/image";
import cardimg from "@/assets/card.png";
import { IoBagAdd } from "react-icons/io5";
import { MdSaveAlt } from "react-icons/md";

const DetailsPage = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 container mx-auto my-15">
        <div className="">
          <Image
            src={cardimg}
            alt="cardimg"
            width={588}
            className="rounded-3xl h-197"
          />
        </div>
        <div className="">
          <h2 className="font-bold text-[36px] text-[#FFFFFF] my-2">
            THE LIBRARY
          </h2>
          <p className="font-normal text-[14px] text-[#9CA3AF] my-2">
            Twelve lifts covering every major muscle group.
          </p>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-[#C2F800] my-4 rounded-3xl text-[12px] font-bold">
              CHEST
            </button>
            <button className="px-4 py-2 bg-[#C2F800] my-4 rounded-3xl text-[12px] font-bold">
              ARMS
            </button>
          </div>

          <div className="my-10">
            <div className="overflow-hidden rounded-lg border border-gray-700">
              <div className="flex items-center justify-between border-b border-gray-700 bg-[#18181B] px-4 py-3">
                <h3 className="text-[14px] font-medium text-gray-400">
                  EQUIPMENT
                </h3>
                <h3 className="text-[14px] font-medium text-gray-200">
                  Barbell, Bench
                </h3>
              </div>

              <div className="flex items-center justify-between border-b border-gray-700 bg-[#18181B] px-4 py-3">
                <h3 className="text-[14px] font-medium text-gray-400">LEVEL</h3>
                <h3 className="text-[14px] font-medium text-gray-200">
                  Intermediate
                </h3>
              </div>

              <div className="flex items-center justify-between border-b border-gray-700 bg-[#18181B] px-4 py-3">
                <h3 className="text-[14px] font-medium text-gray-400">
                  MUSCLE
                </h3>
                <h3 className="text-[14px] font-medium text-gray-200">Chest</h3>
              </div>

              <div className="flex items-center justify-between border-b border-gray-700 bg-[#18181B] px-4 py-3">
                <h3 className="text-[14px] font-medium text-gray-400">
                  DURATION
                </h3>
                <h3 className="text-[14px] font-medium text-gray-200">
                  45 Minutes
                </h3>
              </div>

              <div className="flex items-center justify-between border-b border-gray-700 bg-[#18181B] px-4 py-3">
                <h3 className="text-[14px] font-medium text-gray-400">
                  CALORIES
                </h3>
                <h3 className="text-[14px] font-medium text-gray-200">
                  350 Kcal
                </h3>
              </div>

              <div className="flex items-center justify-between bg-[#18181B] px-4 py-3">
                <h3 className="text-[14px] font-medium text-gray-400">REPS</h3>
                <h3 className="text-[14px] font-medium text-gray-200">
                  10–12 Reps
                </h3>
              </div>
            </div>
          </div>

            <div className="">
                <h2 className="font-extrabold text-[16px] text-[#FFFFFF] my-2">INSTRUCTIONS</h2>
                <ol className="my-2">
                    <li className="font-medium text-[14px] text-[#D1D5DB] my-2">1. Lie on the bench with eyes under the bar and feet planted.</li>
                    <li className="font-medium text-[14px] text-[#D1D5DB] my-2">2. Unrack with locked elbows and lower the bar to mid-chest.</li>
                    <li className="font-medium text-[14px] text-[#D1D5DB] my-2">3. Press up in a slight arc until elbows lock without bouncing.</li>
                    <li className="font-medium text-[14px] text-[#D1D5DB] my-2">4. Keep shoulder blades pinched and a natural arch in the back.</li>
                </ol>
            </div>

             <div className="flex gap-4 my-4">
            <button className="px-4 py-2 bg-[#C2F800] my-4 rounded-xl text-[12px] font-bold text-[#0F1115]">
            <span className='flex gap-4 items-center'><i><IoBagAdd /></i> Add to today,s plan</span>
            </button>
            <button className="px-4 py-2 my-4 rounded-xl text-[12px] font-bold border-2 border-[#374151]">
            <span className='flex gap-4 text-[#9CA3AF] items-center'><i><MdSaveAlt /></i> Save for later</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
