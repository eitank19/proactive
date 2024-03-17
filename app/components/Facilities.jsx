import FacilitiesCard from './FacilitiesCard';

const Facilities = () => {
  return (
    <div className="max-w-[68.125rem] mx-auto w-[calc(100%-1.25rem)]">
      <div className="relative mt-[6.25rem] hidden lg:block">
        <img
          src={'assets/images/facilities-banner.png'}
          alt=""
          className="w-full h-[18.75rem] shadow-[0_0.25rem_0.25rem_0_rgba(0,0,0,0.25)] rounded-[1.875rem] object-cover"
        />
        <div className="px-6 py-7 rounded-[1.25rem] bg-color-7 backdrop-blur-[1.25rem] absolute left-6 top-2/4 -translate-y-2/4">
          <p className="text-xl tracking-[0.038rem] leading-6 font-normal text-center [text-shadow:0_0_1.563rem_rgba(0,0,0,0.3)] mb-3">
            זה היה לא צפוי אבל בסוף זה קרה...
          </p>
          <h1 className="text-[2.125rem] tracking-[0.064rem] leading-9 font-black text-center [text-shadow:0_0_1.563rem_rgba(0,0,0,0.3)] mb-6">
            אפילו אצלנו בגולן
          </h1>
          <p className="text-lg tracking-[0.034rem] leading-5 font-normal text-center [text-shadow:0_0_1.563rem_rgba(0,0,0,0.3)] mb-6">
            חשבנו על הכל והשקענו הרבה כדי שאפילו כאן
            <span className="block">בדרום הגולן לא יחסר דבר</span>
          </p>
          <a
            href=""
            target="_blank"
            className="flex w-fit mx-auto tracking-[0.013rem] justify-center items-center gap-2 h-[3.375rem] text-color-3 bg-color-2 py-[0.875rem] px-[1.5rem] rounded-[0.938rem] text-xl leading-6 font-bold shadow-[inset_0_0_0.938rem_rgba(0,0,0,0.35),0_0_1.563rem_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-color-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
          >
            נשמע כמו המקום בשבילי
            <img
              src={'/assets/svg/whatsapp-icon.svg'}
              alt=""
              className="w-5 h-5"
            />
          </a>
        </div>
      </div>
      <div className="block relative lg:hidden mt-[6.25rem]">
        <img
          src={'assets/images/facilities-banner-small.png'}
          className="w-full rounded-t-[1.875rem]"
          alt=""
        />
        <div className="gradient-top absolute bottom-0 w-full h-full flex flex-col justify-end items-center" />
      </div>
      <div className="block mt-[-7.5rem] sm:mt-[-10rem] relative lg:hidden">
        <p className="text-lg tracking-[0.038rem] leading-6 font-normal text-center [text-shadow:0_0_1.563rem_rgba(0,0,0,0.3)] mb-2">
          זה היה לא צפוי אבל בסוף זה קרה...
        </p>
        <h1 className="text-[1.875rem] tracking-[0.064rem] leading-9 font-black text-center [text-shadow:0_0_1.563rem_rgba(0,0,0,0.3)] mb-2">
          אפילו אצלנו בגולן
        </h1>
        <p className="text-base tracking-[0.034rem] leading-5 font-normal text-center [text-shadow:0_0_1.563rem_rgba(0,0,0,0.3)] mb-10">
          חשבנו על הכל והשקענו הרבה כדי שאפילו כאן
          <span className="block">בדרום הגולן לא יחסר דבר</span>
        </p>
      </div>
      <div className="mt-8 relative z-2 flex justify-between items-center flex-wrap gap-7 lg:gap-4 xl:gap-6">
        <FacilitiesCard />
        <FacilitiesCard />
        <FacilitiesCard />
        <FacilitiesCard />
        <FacilitiesCard />
      </div>
      <div className="mt-7 lg:hidden flex justify-center items-center">
        <a
          href=""
          target="_blank"
          className="flex w-fit mx-auto tracking-[0.013rem] justify-center items-center gap-2 h-[3.375rem] text-color-3 bg-color-2 py-[0.875rem] px-[1.5rem] rounded-[0.938rem] text-xl leading-6 font-bold shadow-[inset_0_0_0.938rem_rgba(0,0,0,0.35),0_0_1.563rem_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-color-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
        >
          נשמע כמו המקום בשבילי
          <img
            src={'/assets/svg/whatsapp-icon.svg'}
            alt=""
            className="w-5 h-5"
          />
        </a>
      </div>
    </div>
  );
};

export default Facilities;
