import Image from "next/image";
import logo from "@/assets/fot.png";

const Footer = () => {
  return (
    <div className="bg-black">
      <hr className="text-[#9ca3af62]" />
      <div className="grid grid-cols-2 container mx-auto p-4 items-center">
        <div className="">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="logo" height={24} width={24} />
            <h3 className="font-extrabold md:text-[18px] text-[#9CA3AF]">
              FITLOG
            </h3>
          </div>
        </div>
        <div className="flex justify-end">
          <p className="font-medium text-[8px] sm:text-[10px] md:text-[12px] text-[#9CA3AF]">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
