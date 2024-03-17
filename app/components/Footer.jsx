const Footer = () => {
  return (
    <footer className="mt-[6.25rem]">
      <div className="bg-color-5 py-8">
        <div className="max-w-[68.125rem] mx-auto w-[calc(100%-1.25rem)] flex-col md:flex-row md:flex-wrap justify-center lg:flex-nowrap flex items-center md:items-start lg:justify-between gap-8 lg:gap-4 xl:gap-8">
          <div className="w-[20.625rem] md:w-[21.25rem]">
            <h2 className="text-[1.5rem] md:text-[2.125rem] leading-7 md:leading-[2.5rem] font-black text-center md:text-right">
              הגעתם עד לכאן,
              <span className="block text-lg md:text-[1.375rem] leading-6 md:leading-7 font-black text-center md:text-right md:mb-4">
                כנראה שהצלחנו לעניין אתכם
              </span>
            </h2>
            <a
              href=""
              target="_blank"
              className="hidden md:inline-flex tracking-[0.013rem] justify-center items-center gap-2 h-[3.375rem] text-color-3 bg-color-2 py-[0.875rem] px-[1.5rem] rounded-[0.938rem] text-xl leading-6 font-bold shadow-[inset_0_0_0.938rem_rgba(0,0,0,0.35),0_0_1.563rem_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-color-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
            >
              לחצו כאן לפניה ב
              <img
                src={'/assets/svg/whatsapp-icon.svg'}
                alt=""
                className="w-5 h-5"
              />
            </a>
          </div>
          <div className="w-[20.625rem] md:w-[21.25rem]">
            <p className="text-base md:text-lg tracking-[0.011rem] leading-5 font-normal text-center md:text-right mb-5">
              אז רצינו להגיד שאתם ממוזמנים לפנות אלינו לכל הקשור לProActive
              באפיק במספרים:
            </p>
            <a
              href="tel:054-554-3345"
              className="block text-base md:text-lg tracking-[0.011rem] leading-5 font-normal text-center md:text-right"
            >
              עסקי: 054-554-3345
            </a>
            <a
              href="tel:050-777-6656"
              className="block text-base md:text-lg tracking-[0.011rem] leading-5 font-normal text-center md:text-right"
            >
              דניאל: 050-777-6656
            </a>
            <a
              href="tel:050-334-5467"
              className="block text-base md:text-lg tracking-[0.011rem] leading-5 font-normal text-center md:text-right"
            >
              נאור: 050-334-5467
            </a>
          </div>
          <div className="w-[20.625rem] md:w-[21.25rem]">
            <h4 className="block text-base md:text-lg tracking-[0.011rem] leading-5 font-bold text-center md:text-right mb-5">
              חדר כושר בקיבוץ אפיק, דרום רמת הגולן
            </h4>
            <ul>
              <li className="text-base md:text-lg tracking-[0.011rem] leading-5 font-normal text-center md:text-right">
                <span className="pl-1">&#8226;</span>
                אימונים קבוצתיים בגולן
              </li>
              <li className="text-base md:text-lg tracking-[0.011rem] leading-5 font-normal text-center md:text-right">
                <span className="pl-1">&#8226;</span>
                אימונים אישיים בגולן
              </li>
              <li className="text-base md:text-lg tracking-[0.011rem] leading-5 font-normal text-center md:text-right">
                <span className="pl-1">&#8226;</span>
                חדר כושר מקצועי בגולן
              </li>
              <li className="text-base md:text-lg tracking-[0.011rem] leading-5 font-normal text-center md:text-right">
                <span className="pl-1">&#8226;</span>
                פיתוח ספורטאיים בגולן
              </li>
              <li className="text-base md:text-lg tracking-[0.011rem] leading-5 font-normal text-center md:text-right">
                <span className="pl-1">&#8226;</span>
                חוגי כושר בגולן
              </li>
            </ul>
          </div>
          <div className="block md:hidden">
            <a
              href=""
              target="_blank"
              className="inline-flex tracking-[0.013rem] justify-center items-center gap-2 h-[3.375rem] text-color-3 bg-color-2 py-[0.875rem] px-[1.5rem] rounded-[0.938rem] text-xl leading-6 font-bold shadow-[inset_0_0_0.938rem_rgba(0,0,0,0.35),0_0_1.563rem_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-color-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
            >
              לחצו כאן לפניה ב
              <img
                src={'/assets/svg/whatsapp-icon.svg'}
                alt=""
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>
      </div>
      <p className="bg-color-3 py-5 text-sm leading-4 font-normal flex justify-center items-center gap-2">
        נבנה ע”י EKDSolutions עבור
        <a href="#">
          <img
            src={'/assets/svg/pro-active.svg'}
            alt=""
            className="h-[0.75rem] w-fit"
          />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
