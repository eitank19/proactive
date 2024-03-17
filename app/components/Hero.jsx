'use client';

const Hero = () => {
  return (
    <section className="max-w-[68.125rem] mx-auto lg:w-[calc(100%-1.25rem)]">
      <div className="hidden lg:block relative mt-[6.25rem]">
        <img
          src={'assets/images/hero.png'}
          alt=""
          className="w-full h-[18.75rem] shadow-[0_0.25rem_0.25rem_0_rgba(0,0,0,0.25)] rounded-[1.875rem] object-cover"
        />
        <div className="px-6 py-7 rounded-[1.25rem] bg-color-7 backdrop-blur-[1.25rem] absolute right-6 top-2/4 -translate-y-2/4">
          <p className="text-xl tracking-[0.038rem] leading-6 font-normal text-center [text-shadow:0_0_1.563rem_rgba(0,0,0,0.3)] mb-3">
            יאללה, הגיע הזמן לעשות את הצעד
          </p>
          <h1 className="text-[2.125rem] tracking-[0.064rem] leading-9 font-black text-center [text-shadow:0_0_1.563rem_rgba(0,0,0,0.3)] mb-6">
            ולהשקיע בעצמכם
          </h1>
          <p className="text-lg tracking-[0.034rem] leading-5 font-normal text-center [text-shadow:0_0_1.563rem_rgba(0,0,0,0.3)] mb-6">
            מנוי חודשי לחדר כושר באפ יק
            <span className="block font-bold">החל מ₪257 בלבד</span>
          </p>
          <a
            href=""
            target="_blank"
            className="flex w-fit mx-auto tracking-[0.013rem] justify-center items-center gap-2 h-[3.375rem] text-color-3 bg-color-2 py-[0.875rem] px-[1.5rem] rounded-[0.938rem] text-xl leading-6 font-bold shadow-[inset_0_0_0.938rem_rgba(0,0,0,0.35),0_0_1.563rem_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-color-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
          >
            אז איפה נרשמים?
            <img
              src={'/assets/svg/whatsapp-icon.svg'}
              alt=""
              className="w-5 h-5"
            />
          </a>
        </div>
      </div>
      <div className="block relative lg:hidden mt-[3.849rem]">
        <img src={'assets/images/hero-small.png'} className="w-full" alt="" />
        <div className="gradient-top absolute h-full bottom-0 w-full">
          <div className="px-4 w-[calc(100%-2rem)] absolute -bottom-[18.75rem] md:-bottom-[9.375rem] left-1/2  -translate-x-1/2 -translate-y-1/2   py-7 rounded-[1.25rem] bg-color-9 backdrop-blur-[1.25rem]">
            <p className="text-lg tracking-[0.038rem] leading-6 font-normal text-center [text-shadow:0_0_1.563rem_rgba(0,0,0,0.3)] mb-3">
              יאללה, הגיע הזמן לעשות את הצעד
            </p>
            <h1 className="text-[1.875rem] tracking-[0.064rem] leading-9 font-black text-center [text-shadow:0_0_1.563rem_rgba(0,0,0,0.3)] mb-6">
              ולהשקיע בעצמכם
            </h1>
            <p className="text-lg tracking-[0.034rem] leading-5 font-normal text-center [text-shadow:0_0_1.563rem_rgba(0,0,0,0.3)] mb-6">
              מנוי חודשי לחדר כושר באפ יק
              <span className="block font-bold">החל מ₪257 בלבד</span>
            </p>
            <a
              href=""
              target="_blank"
              className="flex w-fit mx-auto tracking-[0.013rem] justify-center items-center gap-2 h-[3.375rem] text-color-3 bg-color-2 py-[0.875rem] px-[1.5rem] rounded-[0.938rem] text-xl leading-6 font-bold shadow-[inset_0_0_0.938rem_rgba(0,0,0,0.35),0_0_1.563rem_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-color-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
            >
              אז איפה נרשמים?
              <img
                src={'/assets/svg/whatsapp-icon.svg'}
                alt=""
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
