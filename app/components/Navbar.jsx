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

      {/* ================= DESKTOP NAVBAR ================= */}
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
            className="w-35 cursor-pointer"
            priority
          />
        </a>

        {/* Center Menu (Desktop only) */}
        <ul
          className="
            hidden md:flex items-center gap-1 lg:gap-2
            rounded-full px-10 py-3 relative
            bg-[linear-gradient(90deg,
              rgba(180,255,200,0.9)_0%,
              rgba(220,255,160,0.9)_25%,
              rgba(255,230,150,0.9)_45%,
              rgba(255,200,150,0.9)_65%,
              rgba(255,170,190,0.9)_100%
            )]
            temp-gradient backdrop-blur-md
            border border-white/40
            shadow-[0_8px_30px_rgba(255,180,180,0.35),inset_0_1px_1px_rgba(255,255,255,0.6)]
            text-sm font-medium text-gray-700
          "
        >
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
                  font-ovo px-3 py-1.5 rounded-full
                  transition-colors duration-200
                  hover:text-gray-900
                "
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side (Desktop only) */}
        <div className="hidden md:flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="" className="w-6" />
          </button>

          <a
            href="#contact"
            className="
              flex items-center gap-2
              px-6 py-2 rounded-full text-sm font-medium
              border border-gray-400
              bg-white/80 backdrop-blur-sm shadow
              transition-all duration-300
              hover:bg-green-500 hover:text-white
            "
          >
            Contact
            <Image
              src={assets.whatsapp}
              alt="whatsapp"
              width={15}
              height={15}
            />
          </a>
        </div>
      </nav>
     {/* ================= MOBILE LIQUID BOTTOM NAVBAR ================= */}
<div className="fixed bottom-5 left-0 right-0 z-50 md:hidden flex justify-center">
  <nav
    className="
      liquid-bar
      flex items-center gap-10
      px-10 py-5
      rounded-full
    "
  >
    {/* Home */}
    <a href="#top" className="relative group liquid-item">
      <div className="liquid-pop">Home</div>
      <img
        src={assets.web_icon.src}
        alt="Home"
        className="w-8 h-8"
      />
    </a>

    {/* About */}
    <a href="#about" className="relative group liquid-item">
      <div className="liquid-pop">About</div>
      <img
        src={assets.user_image.src}
        alt="About"
        className="w-8 h-8"
      />
    </a>

    {/* Courses */}
    <a href="#services" className="relative group liquid-item">
      <div className="liquid-pop">Courses</div>
      <img
        src={assets.edu_icon.src}
        alt="Courses"
        className="w-8 h-8"
      />
    </a>

    {/* Instructor */}
    <a href="#work" className="relative group liquid-item">
      <div className="liquid-pop">Instructor</div>
      <img
        src={assets.code_icon.src}
        alt="Instructor"
        className="w-8 h-8"
      />
    </a>

    {/* Contact */}
    <a href="#contact" className="relative group liquid-item">
      <div className="liquid-pop">Contact</div>
      <img
        src={assets.whatsapp.src}
        alt="Contact"
        className="w-8 h-8"
      />
    </a>
  </nav>
</div>



    </>
  )
}

export default Navbar;
