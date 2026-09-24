import Image from "next/image";
import { Ifitlog } from "@/type";
import AddtodayplanCard from "@/app/component/AddtodayplanCard";
import SaveplanCard from "@/app/component/SaveplanCard";

interface IdetailsProps {
  params: Promise<{ userId: string }>;
}

const DetailsPage = async({params}: IdetailsProps) => {

  const {userId} = await params;
   const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${userId}`)
   const data = await response.json() as Ifitlog
   console.log(data);
   

  return (
    <div>
          
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto pt-15">

        <div className="flex justify-center md:justify-start p-2">
          <Image
            src={data.image}
            alt={data.name}
            width={588}
            height={197}
            className="rounded-3xl md:h-197 h-auto"
          />
        </div>
        <div className="p-4">
          <h2 className="font-bold text-[36px] text-[#FFFFFF] my-2">
            {data.name}
          </h2>
          <p className="font-normal text-[14px] text-[#9CA3AF] my-2">
            {data.description}
          </p>
          <div className="flex gap-4">
            {data.muscleGroups.map((muscle:string, i:number)=>(
            <button key={i} className="px-4 py-2 bg-[#C2F800] text-black my-4 rounded-3xl text-[12px] font-bold">
              {muscle}
            </button>
            ))}
          
          </div>

          <div className="my-10">
            <div className="overflow-hidden rounded-lg border border-gray-700">
              <div className="flex items-center justify-between border-b border-gray-700 bg-[#18181B] px-4 py-3">
                <h3 className="text-[14px] font-medium text-gray-400">
                  EQUIPMENT
                </h3>
                <h3 className="text-[14px] font-medium text-gray-200">
                  {data.equipment}
                </h3>
              </div>

              <div className="flex items-center justify-between border-b border-gray-700 bg-[#18181B] px-4 py-3">
                <h3 className="text-[14px] font-medium text-gray-400">DIFFICULTY</h3>
                <h3 className="text-[14px] font-medium text-gray-200">
                  {data.difficulty}
                </h3>
              </div>

              <div className="flex items-center justify-between border-b border-gray-700 bg-[#18181B] px-4 py-3">
                <h3 className="text-[14px] font-medium text-gray-400">
                  SETS
                </h3>
                <h3 className="text-[14px] font-medium text-gray-200">{data.sets}</h3>
              </div>

              <div className="flex items-center justify-between border-b border-gray-700 bg-[#18181B] px-4 py-3">
                <h3 className="text-[14px] font-medium text-gray-400">
                 REPS
                </h3>
                <h3 className="text-[14px] font-medium text-gray-200">
                  {data.reps}
                </h3>
              </div>

              <div className="flex items-center justify-between border-b border-gray-700 bg-[#18181B] px-4 py-3">
                <h3 className="text-[14px] font-medium text-gray-400">
                  DURATION
                </h3>
                <h3 className="text-[14px] font-medium text-gray-200">
                  {data.duration} min
                </h3>
              </div>

              <div className="flex items-center justify-between border-b border-gray-700 bg-[#18181B] px-4 py-3">
                <h3 className="text-[14px] font-medium text-gray-400">
                  CALORIES
                </h3>
                <h3 className="text-[14px] font-medium text-gray-200">
                  {data.caloriesBurned} kcal
                </h3>
              </div>
              <div className="flex items-center justify-between bg-[#18181B] px-4 py-3">
                <h3 className="text-[14px] font-medium text-gray-400">RATING</h3>
                <h3 className="text-[14px] font-medium text-gray-200">
                  {data.rating}
                </h3>
              </div>
            </div>
          </div>

            <div className="">
                <h2 className="font-extrabold text-[16px] text-[#FFFFFF] my-2">INSTRUCTIONS</h2>
                <ol className="my-2">
                {data.instructions.map((item:string, i:number)=>(
                    <li key={i} className="font-medium text-[14px] text-[#D1D5DB] my-2">{i+1}. {item}</li>
                ))}

                </ol>
            </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-4">
                <AddtodayplanCard data={data}/>
                <SaveplanCard data={data}/>
          </div>

        </div>

      </div>
         
    </div>
  );
};

export default DetailsPage;
