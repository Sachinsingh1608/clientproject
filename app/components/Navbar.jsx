import { assets } from '@/assets/assets'
import Image from "next/image";

function Navbar() {
  return (
    <>
      {/* Background decoration */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 -translate-y-[80%]">
        <Image
          src={assets.header_bg_color}
          alt=""
          className="w-full"
          priority
        />
      </div>

      {/* Navbar */}
      <nav
        className="fixed top-0 z-50 w-full
        px-5 lg:px-8 xl:px-[8%] py-1
        flex items-center justify-between"
      >
        {/* Logo */}
        <a href="#top">
          <Image
            src={assets.logo}
            alt="logo"
            className="w-24 cursor-pointer"
            priority
          />
        </a>

        {/* Center Menu */}
  <ul
  className="
    hidden md:flex items-center gap-1 lg:gap-2
    rounded-full px-10 py-3
    relative
    bg-[linear-gradient(90deg,
      rgba(180,255,200,0.9)_0%,
      rgba(220,255,160,0.9)_25%,
      rgba(255,230,150,0.9)_45%,
      rgba(255,200,150,0.9)_65%,
      rgba(255,170,190,0.9)_100%
    )]
    temp-gradient
    backdrop-blur-md
    border border-white/40
    shadow-[0_8px_30px_rgba(255,180,180,0.35),inset_0_1px_1px_rgba(255,255,255,0.6)]
    text-sm font-medium text-gray-700
  "
>
<span className="absolute inset-y-1/4 left-1/2 w-px bg-white/60"></span>



          {[
            { name: "Home", link: "#top" },
            { name: "About Us", link: "#about" },
            { name: "Courses", link: "#services" },
            { name: "Instructor", link: "#work" },
            { name: "Contact Us", link: "#contact" },
          ].map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="
                  nav-hover
                  font-ovo px-3 py-1.5 rounded-full
                  transition-colors duration-200
                  hover:text-gray-900
                  dark:hover:text-white
                "
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Contact Button */}
        <a
          href="#contact" 
          className=" font-ovo font-medium
            hidden lg:flex items-center gap-2
            px-6 py-2 ml-3
            rounded-full font-ovo text-sm
            border border-gray-400
            bg-white/80 backdrop-blur-sm shadow
            text-gray-700
            transition-all duration-300
            hover:bg-green-500 hover:text-white
            dark:hover:bg-white dark:hover:text-white
          "
        >
          Contact
          <Image
            src={assets.whatsapp}
            alt="contact"
            width={15}
            height={15}
            className="mt-[1px]  "
          />
        </a>
      </nav>
    </>
  )
}

export default Navbar;
