import Myplaincard from "../component/Myplaincard";
import Savecard from "../component/Savecard";

const MyplanPage = () => {
  return (
    <div>
      <div className="container mx-auto my-16">
        <div className="">
          <h2 className="font-bold text-[30px] text-[#FFFFFF] my-2">MY PLAN</h2>
          <p className="font-normal text-[14px] text-[#9CA3AF] my-2">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-700 my-10 gap-2">
          <div className="grid grid-cols-3 items-center border-b border-gray-700 bg-[#18181B] px-8 py-4">
            {/* LEFT */}
            <div className="flex flex-col">
              <h3 className="text-[14px] font-medium text-gray-400">
                EQUIPMENT
              </h3>

              <span className="text-[36px] font-bold text-[#C2F800]">0</span>
            </div>

            {/* CENTER */}
            <div className="flex flex-col items-center">
              <h3 className="text-[14px] font-medium text-gray-200">
                COMPLETED
              </h3>

              <span className="text-[36px] font-bold text-white">0</span>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-end">
              <h3 className="text-[14px] font-medium text-gray-200">
                CALORIES
              </h3>

              <span className="text-[36px] font-bold text-white">0</span>
            </div>
          </div>
        </div>

        <div className="my-10 flex items-start gap-6">
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
                <Myplaincard/>
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
                <Savecard />
              </div>
            </div>
          </div>

          {/* RIGHT — Select */}
          <div className="shrink-0 w-[100px]">
            <select
              defaultValue="Pick a Framework"
              className="select select-info"
            >
              <option disabled>Pick a Framework</option>
              <option>React</option>
              <option>Vue</option>
              <option>Angular</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyplanPage;
