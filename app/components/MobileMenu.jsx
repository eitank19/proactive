'use client';

const MobileMenu = () => {
  return (
    <nav className="transition-all flex lg:hidden flex-col p-6  w-full bg-color-8 h-[100dvh] absolute top:[55px] gap-6">
      <a
        href="#professionals"
        className="text-lg w-fit leading-6 font-bold inline-flex tracking-[.2px] justify-center items-center gap-2 h-[44px] text-color-3 bg-color-2 py-[14px] px-[20px] rounded-[15px] shadow-[inset_0_0_15px_rgba(0,0,0,0.35),0_0_25px_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-color-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        🏆 פיתוח ספורטאים
      </a>
      <a
        href="#plans"
        className="text-lg w-fit leading-6 font-bold inline-flex tracking-[.2px] justify-center items-center gap-2 h-[44px] text-color-3 bg-color-2 py-[14px] px-[20px] rounded-[15px] shadow-[inset_0_0_15px_rgba(0,0,0,0.35),0_0_25px_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-color-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        💸 מחירים
      </a>
      <a
        href="#classes"
        className="text-lg w-fit leading-6 font-bold inline-flex tracking-[.2px] justify-center items-center gap-2 h-[44px] text-color-3 bg-color-2 py-[14px] px-[20px] rounded-[15px] shadow-[inset_0_0_15px_rgba(0,0,0,0.35),0_0_25px_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-color-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        🤸‍ חוגים
      </a>
      <a
        href="#about"
        className="text-lg w-fit leading-6 font-bold inline-flex tracking-[.2px] justify-center items-center gap-2 h-[44px] text-color-3 bg-color-2 py-[14px] px-[20px] rounded-[15px] shadow-[inset_0_0_15px_rgba(0,0,0,0.35),0_0_25px_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-color-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        🏆 עלינו
      </a>
      <a
        href="#supplements"
        className="text-lg w-fit leading-6 font-bold inline-flex tracking-[.2px] justify-center items-center gap-2 h-[44px] text-color-3 bg-color-2 py-[14px] px-[20px] rounded-[15px] shadow-[inset_0_0_15px_rgba(0,0,0,0.35),0_0_25px_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-color-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        👕 מוצרים נלווים
      </a>
      <a
        href="#socials"
        className="text-lg w-fit leading-6 font-bold inline-flex tracking-[.2px] justify-center items-center gap-2 h-[44px] text-color-3 bg-color-2 py-[14px] px-[20px] rounded-[15px] shadow-[inset_0_0_15px_rgba(0,0,0,0.35),0_0_25px_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-color-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        ✌️ סושיאל
      </a>
    </nav>
  );
};

export default MobileMenu;
