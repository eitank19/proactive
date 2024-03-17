const Professionals = () => {
  return (
    <section
      id="professionals"
      className="max-w-[68.125rem] scroll-mt-20 mx-auto w-[calc(100%-1.25rem)]"
    >
      <div className="mt-[6.25rem] flex-col lg:flex-row text-center lg:text-right flex justify-between items-center gap-7 lg:gap-10 xl:gap-16">
        <div className="flex-1 flex-col flex gap-5 lg:gap-6 justify-center">
          <h2 className="text-[1.875rem] md:text-[2.125rem] tracking-[0.021rem] leading-8 md:leading-9 font-black">
            שואפים למקצוענות?
          </h2>
          <h3 className="text-[1.5rem] md:text-[1.75rem] tracking-[0.018rem] leading-7 md:leading-8 font-bold text-color-2">
            הצטרפו לתוכנית הפיתוח שלנו לספורטאים
          </h3>
          <p className="text-lg tracking-[0.021rem] leading-6 font-normal">
            בתור שני ספורטאים מקצועיים שגדלו בדרום רמת הגולן תמיד ידענו מה
            ספורטאי תחרותי צריך ולא יצליח להשיג כאן...
            <span className="block font-bold mt-6">
              לכן החלטנו להעניק לכל ספורטאיי ההווה והעתיד מהגולן והסביבה תוכנית
              מקצועית ומותאמת אישית שתוביל אתכם להישגים אמיתיים!
            </span>
          </p>
          <a
            href=""
            target="_blank"
            className="hidden w-fit lg:inline-flex tracking-[0.013rem] justify-center items-center gap-2 h-[3.375rem] text-color-3 bg-color-2 py-[0.875rem] px-[1.5rem] rounded-[0.938rem] text-xl leading-6 font-bold shadow-[inset_0_0_0.938rem_rgba(0,0,0,0.35),0_0_1.563rem_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-color-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
          >
            השמיים הם הגבול, אני בפנים!
            <img
              src={'/assets/svg/whatsapp-icon.svg'}
              alt=""
              className="w-5 h-5"
            />
          </a>
        </div>
        <div className="w-full lg:w-[28.125rem] card-gradient-shadow py-5 px-5 lg:py-6 lg:px-6 rounded-[1.25rem] flex-col flex gap-5 lg:gap-6 justify-center text-color-1">
          <h2 className="text-[1.875rem] tracking-[0.087rem] leading-7 font-bold lg:text-[2.125rem] lg:tracking-[0.046rem] lg:leading-9 lg:font-black underline text-center">
            התוכנית כוללת:
          </h2>
          <ul className="flex-col flex gap-5 lg:gap-6 text-base leading-5 lg:text-xl text-right lg:leading-6 font-bold text-color-1">
            <li>
              🎯 אימונים אישיים - פעמיים בשבוע
              <ul className="mt-1">
                <li>שיפור יכולות אתלטיות וכוח מתפרץ</li>
                <li>שיפור יכולות טכניות במגרש הכדורגל</li>
              </ul>
            </li>
            <li>🗣️ ליווי אישי מלא וזמינות 24/7 לכל דבר</li>
            <li>
              📆 תכנון לו”ז שבועי בהתאם לאימוני קבוצה בדגש על חלוקת עומס נכונה
            </li>
            <li>💪 מנוי חופשי לחדר הכושר באפיק</li>
          </ul>
        </div>
        <div className="block lg:hidden">
          <a
            href=""
            target="_blank"
            className="w-fit mx-auto lg:mx-0 inline-flex tracking-[0.013rem] justify-center items-center gap-2 h-[3.375rem] text-color-3 bg-color-2 py-[0.875rem] px-[1.5rem] rounded-[0.938rem] text-xl leading-6 font-bold shadow-[inset_0_0_0.938rem_rgba(0,0,0,0.35),0_0_1.563rem_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-color-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
          >
            השמיים הם הגבול, אני בפנים!
            <img
              src={'/assets/svg/whatsapp-icon.svg'}
              alt=""
              className="w-5 h-5"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Professionals;
