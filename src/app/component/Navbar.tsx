import Image from 'next/image';
import logo from "@/assets/logo.png"
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='bg-black'>
            <div className="grid grid-cols-3 container mx-auto items-center p-4">
                <div className="flex items-center gap-2">
                    <Image src={logo} alt='logo' width={38}/>
                    <h3 className='font-extrabold text-[18px] text-[#9CA3AF]'>FITLOG</h3>
                </div>
                <div className="">
                    <ul className='flex gap-x-4 items-center justify-center'>
                        <Link href={"/"}>
                        <li className='font-medium text-[12px] bg-[rgba(194,248,0,0.19)] py-2 px-4 rounded-2xl text-[#C2F800] cursor-pointer'>Workouts</li>
                        </Link>
                        <Link href="/myplain">
                        <li className='font-medium text-[12px] text-[#9CA3AF] hover:bg-[rgba(194,248,0,0.19)] py-2 px-4 rounded-2xl hover:text-[#C2F800] cursor-pointer'>My Plan</li>
                        </Link>
                    </ul>
                </div>
                <div className="flex gap-x-4 items-center justify-end">
                    <div className="flex gap-2 cursor-pointer items-center">
                        <h3 className='font-medium text-[12px] text-[#9CA3AF]'>Plan</h3>
                        <div className="px-2 py-1 border bg-[#C2F800] rounded-2xl">
                           <h3 className='text-[#262626] text-center items-center'>0</h3>
                        </div>
                    </div>
                    <div className="flex gap-2 cursor-pointer items-center">
                        <h3 className='font-medium text-[12px] text-[#9CA3AF]'>Saved</h3>
                         <div className="border border-[#9CA3AF] px-2 py-1 rounded-2xl">
                           <h3 className='text-[#9CA3AF] text-center items-center'>0</h3>
                        </div>
                    </div>
                </div>
            </div>
            <hr  className='text-[#9ca3af62]'/>
        </div>
    );
};

export default Navbar;