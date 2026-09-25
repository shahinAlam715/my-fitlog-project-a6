"use client"
import Image from 'next/image';
import logo from "@/assets/logo.png"
import Link from 'next/link';
import { useContext, useState } from 'react';
import { FaBarsStaggered } from 'react-icons/fa6';
import { FitContext } from '@/context/Contextprovider';
import { usePathname } from 'next/navigation';

const Navbar = () => {

    const {saveplan} = useContext(FitContext)
    const {addplan} = useContext(FitContext)
    const pathName = usePathname()
    const [menu, setmenu] = useState(false)

    const handlemenu = ()=>{
       setmenu(!menu)
    }

    return (
        <div className='bg-black'>
            <div className="grid grid-cols-2 md:grid-cols-3 container mx-auto items-center p-4 justify-between relative">
                <div className="flex items-center gap-2">
                    <Image src={logo} alt='logo' width={38} className='w-5 md:w-9.5'/>
                    <h3 className='font-extrabold text-[14px] md:text-[18px] text-[#9CA3AF]'>FITLOG</h3>
                </div>
                {menu === true ? ( <div className="block absolute top-14 right-5 md:static">
                   <ul className='md:flex md:gap-x-4 md:items-center md:justify-center'>
                        <Link href={"/"}>
                        <li className={`font-medium text-[12px] py-2 px-4 rounded-2xl  cursor-pointer ${pathName === "/" ? "bg-[rgba(194,248,0,0.19)] text-[#C2F800]" :"text-[#9CA3AF]"}`}>Workouts</li>
                        </Link>
                        <Link href="/myplain">
                        <li className={`font-medium text-[12px] py-2 px-4 rounded-2xl cursor-pointer ${pathName === "/myplain" ? "bg-[rgba(194,248,0,0.19)] text-[#C2F800]" :"text-[#9CA3AF]"}`}>My Plan</li>
                        </Link>
                    </ul>
                </div>): ( <div className="hidden md:block">
                    <ul className='flex gap-x-4 items-center justify-center'>
                        <Link href={"/"}>
                        <li className={`font-medium text-[12px] py-2 px-4 rounded-2xl  cursor-pointer ${pathName === "/" ? "bg-[rgba(194,248,0,0.19)] text-[#C2F800]" :"text-[#9CA3AF]"}`}>Workouts</li>
                        </Link>
                        <Link href="/myplain">
                        <li className={`font-medium text-[12px] py-2 px-4 rounded-2xl cursor-pointer ${pathName === "/myplain" ? "bg-[rgba(194,248,0,0.19)] text-[#C2F800]" :"text-[#9CA3AF]"}`}>My Plan</li>
                        </Link>
                    </ul>
                </div>)}
               
                <div className="hidden md:block">
                <div className="flex gap-x-4 items-center justify-center">
                    <div className="flex gap-2 cursor-pointer items-center">
                        <h3 className='font-medium text-[12px] text-[#9CA3AF]'>Plan</h3>
                        <div className="px-2 py-1 border bg-[#C2F800] rounded-2xl">
                           <h3 className='text-[#262626] text-center items-center'>{addplan.length}</h3>
                        </div>
                    </div>
                    <div className="flex gap-2 cursor-pointer items-center">
                        <h3 className='font-medium text-[12px] text-[#9CA3AF]'>Saved</h3>
                         <div className="border border-[#9CA3AF] px-2 py-1 rounded-2xl">
                           <h3 className='text-[#9CA3AF] text-center items-center'>{saveplan.length}</h3>
                        </div>
                    </div>
                </div>
                </div>
                <div className="block md:hidden">
                    <span className='flex justify-end'><i><FaBarsStaggered className='text-[#FFFFFF]' onClick={()=>handlemenu()}/></i></span>
                </div>
            </div>
            <hr  className='text-[#9ca3af62]'/>
        </div>
    );
};

export default Navbar;