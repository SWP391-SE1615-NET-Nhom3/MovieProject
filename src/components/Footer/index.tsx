


import FooterImg from "@/assets/images/footer-bg.webp";
import Logo from "@/assets/svg/tmovie.svg";

import { footerLinks } from "@/constants/listmovie";
import { cn } from "@/utils/helper";
import Image from "next/image";


  function Footer() {
  return (
    <footer
      style={{
        marginTop: "50px",
        backgroundImage: `
            linear-gradient(rgba(0,0,0,0.075), rgba(0,0,0,0.075))
        , url(${FooterImg.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="dark:bg-black lg:py-16 sm:py-10 xs:py-8 py-[30px] w-full"
    >
      <div
        className={cn(
          `max-w-[1140px] mx-auto md:px-8 sm:px-6 px-4 xl:px-0`,
          ` flex flex-col items-center  md:gap-12 sm:gap-8 xs:gap-[30px] `
        )}
      >
      <Image
            width={28}
            height={28}
            src={`${Logo.src}`}
            alt="logo"
            className="sm:h-[28px] h-[24px] sm:w-[28px] w-[24px]"
          />
          <span
            className={cn(`text-white dark:text-primary`,`font-semibold sm:text-[18px] text-[16.75px]`)}
          >
            tMovies
          </span>
        <ul className="grid grid-cols-3 items-center justify-start font-medium text-gray-300 capitalize md:gap-x-16 md:gap-y-4 md:gap-4 sm:gap-2  xs:gap-[6px] gap-1">
          {footerLinks.map((title, index) => {
            return (
              <li key={index} className="text-center text-white xs:text-[12px] text-[14px] font-normal hover:text-primary transition-all duration-200 ease-in-out">
                
                  {title}
               
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
