const About = () => {
  return (
    <div
      id="about"
      className="max-w-[68.125rem] mx-auto w-[calc(100%-1.25rem)]"
    >
      <div className="mt-[6.25rem] flex-col lg:flex-row flex justify-between items-center gap-7 lg:gap-10 xl:gap-16">
        <div className="flex-1 flex-col flex gap-0 lg:gap-5">
          <h2 className="text-[1.875rem] md:text-[2.125rem] tracking-[0.021rem] leading-8 md:leading-9 text-center lg:text-right font-black mb-5 lg:mb-0">
            שותפים להצלחה
          </h2>
          <h3 className="text-lg lg:text-[1.75rem] tracking-[0.018rem] leading-6 lg:leading-8 text-center lg:text-right font-bold  lg:text-color-2">
            כבר בתור ילדים הרגשנו מה חסר כאן,
          </h3>
          <p className="text-lg tracking-[0.021rem] leading-6 font-normal text-center lg:text-right">
            שנינו תושבי הגולן (במקור ועד היום) עם תשוקה עזה ורצון ענק לפתח את
            האיזור.
            <span className="block mt-5 lg:mt-0 lg:inline lg:font-bold">
              אז החלטנו להעניק לכל תושבי המקום בלי יוצא מן הכלל את מה שלנו כל כך
              היה חסר בדגש על מענה אישי ומקצועי
              <span className="block mt-5 lg:mt-0 lg:inline"> 🫶</span>
            </span>
          </p>
          <a
            href=""
            target="_blank"
            className="hidden w-fit lg:inline-flex tracking-[0.013rem] justify-center items-center gap-2 h-[3.375rem] text-color-3 bg-color-2 py-[0.875rem] px-[1.5rem] rounded-[0.938rem] text-xl leading-6 font-bold shadow-[inset_0_0_0.938rem_rgba(0,0,0,0.35),0_0_1.563rem_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-color-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            מוזמנים לדבר איתנו
            <img
              src={'/assets/svg/whatsapp-icon.svg'}
              alt=""
              className="w-5 h-5"
            />
          </a>
        </div>
        <div className="flex-col md:flex-row flex md:w-full lg:w-auto md:justify-evenly lg:justify-normal gap-5">
          <div className="w-[17.188rem] relative">
            <img
              src={'assets/images/twizer-card.png'}
              className="relative top-[-0.656rem]"
              alt=""
            />
            <div className="absolute bottom-6 px-3">
              <h3 className="text-[1.5rem] leading-7 tracking-[0.015rem] font-bold mb-3 text-center">
                דניאל טוויזר
              </h3>
              <p className="text-base leading-5 tracking-[0.015rem] font-light text-center">
                כדורגלן ובוגר תואר מדעי התזונה והאימון, כיום כדורגלן בליגות
                הבכירות בישראל לאחר מספר שנים בליגת המכללות בארה”ב
              </p>
            </div>
          </div>
          <div className="w-[17.188rem] relative">
            <img src={'assets/images/naor-card.png'} alt="" />
            <div className="absolute bottom-6 px-8">
              <h3 className="text-[1.5rem] leading-7 tracking-[0.015rem] font-bold mb-3 text-center">
                נאור בן עמי
              </h3>
              <p className="text-base leading-5 tracking-[0.015rem] font-light text-center">
                כדורגלן ובוגר הבית ספר למקצועות הספורט, כיום משחק בליגה א’
                בישראל לאחר כשנתיים באנגליה
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
