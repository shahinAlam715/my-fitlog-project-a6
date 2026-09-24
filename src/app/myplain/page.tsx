"use client";
import { useContext, useState } from "react";
import Myplaincard from "../component/Myplaincard";
import Savecard from "../component/Savecard";
import { FitContext } from "@/context/Contextprovider";
import Link from "next/link";
import { Ifitlog } from "@/type";

const MyplanPage = () => {
  const { addplan, saveplan } = useContext(FitContext);

  const [sortby, setsortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  const sortingPlan = (item: Ifitlog[]) => {
    const newData = [...item];

    if (sortby === "duration") {
      newData.sort((a, b) => a.duration - b.duration);
    } else if (sortby === "calories") {
      newData.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortby === "rating") {
      newData.sort((a, b) => b.rating - a.rating);
    }

    return newData;
  };

  const allAddplan = sortingPlan(addplan);
  const allSaveplan = sortingPlan(saveplan);

  return (
    <div>
      <div className="container mx-auto pt-10 py-4">
        <div className="p-2">
          <h2 className="font-bold text-[30px] text-[#FFFFFF] my-2">MY PLAN</h2>
          <p className="font-normal text-[14px] text-[#9CA3AF] my-2">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-700 my-10 gap-2 p-2">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center rounded-2xl border-b border-gray-700 bg-[#18181B] px-8 py-4">
            {/* LEFT */}
            <div className="flex flex-col">
              <h3 className="text-[14px] font-medium text-gray-400">
                Exercises
              </h3>

              <span className="text-[36px] font-bold text-[#C2F800]">0</span>
            </div>

            {/* CENTER */}
            <div className="flex flex-col">
              <h3 className="text-[14px] font-medium text-gray-200">Minutes</h3>

              <span className="text-[36px] font-bold text-white">0</span>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col">
              <h3 className="text-[14px] font-medium text-gray-200">
                Calories
              </h3>

              <span className="text-[36px] font-bold text-white">0</span>
            </div>
          </div>
        </div>

        <div className="my-10 flex justify-between gap-6 p-2">
          {/* LEFT — Tabs */}
          <div className="min-w-0 flex-1">
            <div className="tabs tabs-lift w-full">
              {/* Tab 1 */}
              <input
                type="radio"
                name="my_tabs_3"
                className="tab"
                aria-label="My Plan"
              />

              <div className="tab-content w-full border-base-300 bg-base-100 p-6">
                {addplan.length > 0 ? (
                  <Myplaincard allAddplan={allAddplan} />
                ) : (
                  <div className="rounded-2xl border-2 border-[#A1A1AA] flex min-h-[70vh] flex-col items-center justify-center bg-black px-4 text-center">
                    <h2 className="mt-6 text-5xl font-bold text-white">
                      NOTHING HERE YET
                    </h2>

                    <p className="mt-3 max-w-md text-gray-400">
                      Browse the library and add a lift to get today moving.
                    </p>

                    <Link
                      href="/"
                      className="mt-8 rounded-xl bg-[#C2F800] px-6 py-3 font-bold text-black transition hover:bg-[#b5ed00]"
                    >
                      Go to workouts
                    </Link>
                  </div>
                )}
              </div>

              {/* Tab 2 */}
              <input
                type="radio"
                name="my_tabs_3"
                className="tab"
                aria-label="Saved"
                defaultChecked
              />

              <div className="tab-content w-full border-base-300 bg-base-100 p-6">
                {saveplan.length > 0 ? (
                  <Savecard allSaveplan={allSaveplan} />
                ) : (
                  <div className="rounded-2xl border-2 border-[#A1A1AA] flex min-h-[70vh] flex-col items-center justify-center bg-black px-4 text-center">
                    <h2 className="mt-6 text-5xl font-bold text-white">
                      NOTHING HERE YET
                    </h2>

                    <p className="mt-3 max-w-md text-gray-400">
                      Browse the library and add a lift to get today moving.
                    </p>

                    <Link
                      href="/"
                      className="mt-8 rounded-xl bg-[#C2F800] px-6 py-3 font-bold text-black transition hover:bg-[#b5ed00]"
                    >
                      Go to workouts
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT — Select */}
          <div className="shrink-0 w-25">
            <select
              value={sortby}
              onChange={(e) =>
                setsortBy(e.target.value as "duration" | "calories" | "rating")
              }
              className="select select-info"
            >
              <option disabled>Sort By</option>
              <option value={"duration"}>Duration</option>
              <option value={"calories"}>Calories</option>
              <option value={"rating"}>Rating</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyplanPage;
