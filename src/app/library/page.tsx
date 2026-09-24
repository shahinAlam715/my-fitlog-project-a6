import Image from 'next/image';
import { FaFire } from 'react-icons/fa';
import { IoIosStarOutline } from 'react-icons/io';
import { MdAccessTime } from 'react-icons/md';
import cardimg from "@/assets/card.png"

const LibraryPage = () => {
    return (
        <>
        <div className="my-16 container mx-auto p-4">
        <div className="">
            <h2 className='font-bold text-[30px] text-[#FFFFFF] my-2'>THE LIBRARY</h2>
            <p className='font-normal text-[14px] text-[#9CA3AF] my-2'>Twelve lifts covering every major muscle group.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

            <div className="my-4 bg-[#262626] rounded-xl">
                <Image src={cardimg} alt='' height={192} width={392} className='w-full rounded-xl'/>
                <div className="p-4">
                <div className="flex gap-4">
                    <button className="px-4 py-2 bg-[#C2F800] my-4 rounded-3xl text-[12px] font-bold">CHEST</button>
                    <button className="px-4 py-2 bg-[#C2F800] my-4 rounded-3xl text-[12px] font-bold">ARMS</button>
                </div>
                <h2 className='font-bold text-[18px] text-[#FFFFFF] my-3'>BARBELL BENCH PRESS</h2>
                <p className='font-normal text-[#9CA3AF] text-[12px] my-2'>Barbell, Bench</p>
                <hr className='text-[#9CA3AF] my-4'/>
                <div className="grid grid-cols-3 items-center">
                    <span className='flex gap-4 text-[#9CA3AF] items-center'><i><MdAccessTime /></i>25 min</span>
                    <span className='flex gap-4 text-[#9CA3AF] items-center'><i><FaFire /></i>180 kcal</span>
                    <span className='flex gap-4 text-[#9CA3AF] items-center'><i><IoIosStarOutline /></i>4.8</span>
                </div>
                </div>
            </div>

             <div className="my-4 bg-[#262626] rounded-xl">
                <Image src={cardimg} alt='' height={192} width={392} className='w-full rounded-xl'/>
                <div className="p-4">
                <div className="flex gap-4">
                    <button className="px-4 py-2 bg-[#C2F800] my-4 rounded-3xl text-[12px] font-bold">CHEST</button>
                    <button className="px-4 py-2 bg-[#C2F800] my-4 rounded-3xl text-[12px] font-bold">ARMS</button>
                </div>
                <h2 className='font-bold text-[18px] text-[#FFFFFF] my-3'>BARBELL BENCH PRESS</h2>
                <p className='font-normal text-[#9CA3AF] text-[12px] my-2'>Barbell, Bench</p>
                <hr className='text-[#9CA3AF] my-4'/>
                <div className="grid grid-cols-3 items-center">
                    <span className='flex gap-4 text-[#9CA3AF] items-center'><i><MdAccessTime /></i>25 min</span>
                    <span className='flex gap-4 text-[#9CA3AF] items-center'><i><FaFire /></i>180 kcal</span>
                    <span className='flex gap-4 text-[#9CA3AF] items-center'><i><IoIosStarOutline /></i>4.8</span>
                </div>
                </div>
            </div>

             <div className="my-4 bg-[#262626] rounded-xl">
                <Image src={cardimg} alt='' height={192} width={392} className='w-full rounded-xl'/>
                <div className="p-4">
                <div className="flex gap-4">
                    <button className="px-4 py-2 bg-[#C2F800] my-4 rounded-3xl text-[12px] font-bold">CHEST</button>
                    <button className="px-4 py-2 bg-[#C2F800] my-4 rounded-3xl text-[12px] font-bold">ARMS</button>
                </div>
                <h2 className='font-bold text-[18px] text-[#FFFFFF] my-3'>BARBELL BENCH PRESS</h2>
                <p className='font-normal text-[#9CA3AF] text-[12px] my-2'>Barbell, Bench</p>
                <hr className='text-[#9CA3AF] my-4'/>
                <div className="grid grid-cols-3 items-center">
                    <span className='flex gap-4 text-[#9CA3AF] items-center'><i><MdAccessTime /></i>25 min</span>
                    <span className='flex gap-4 text-[#9CA3AF] items-center'><i><FaFire /></i>180 kcal</span>
                    <span className='flex gap-4 text-[#9CA3AF] items-center'><i><IoIosStarOutline /></i>4.8</span>
                </div>
                </div>
            </div>

        </div>
        </div>
        </>
    );
};

export default LibraryPage;