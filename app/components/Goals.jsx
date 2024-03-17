'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Goals = () => {
  const settings = {
    className: 'center',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    touchThreshold: 100,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
    dots: true,
    dotsClass: 'slick-dots',
    rtl: true,
    arrows: false,
  };

  return (
    <section className="max-w-[68.125rem] overflow-hidden mx-auto lg:w-[calc(100%-1.25rem)] mt-[14.375rem] md:mt-[6.25rem]">
      <h2 className="text-[1.875rem] md:text-[2.125rem] px-4 md:px-0 tracking-[0.021rem] leading-9 font-black text-center mb-5">
        להציב יעדים ולהשיגם
      </h2>
      <p className="text-lg md:text-xl px-4 md:px-0 tracking-[0.038rem] leading-6 font-normal text-center max-w-[37.5rem] mx-auto mb-8">
        לא משנה איזה מן מתאמנים אתם, משפחת פרו-אקטיב תקבל אתכם ותעזור להשיג את
        הגוף, היכולות ורמת הבריאות שתמיד רציתם
      </p>
      <div className="relative before:absolute after:absolute before:top-0 before:left-[-0.313rem] before:w-1/5 before:z-10 before:h-full before:lg-left-background after:top-0 after:right-[-0.313rem] after:w-1/5 after:z-10 after:h-full after:lg-right-background mb-8">
        <Slider {...settings}>
          <div className="w-[18.125rem] mx-auto p-3 md:p-5 rounded-[1.25rem] lg-background">
            <h3 className="text-base md:text-xl text-color-3 tracking-[0.013rem] leading-5 md:leading-6 font-bold text-center mb-5">
              ג’, בת 22, הרזייה
            </h3>
            <img
              src={'assets/images/fitness-goals.png'}
              className="w-[15.625rem] h-[15.625rem] mx-auto rounded-[1.25rem] shadow-[0_0_1.563rem_0_rgba(0,0,0,0.2)]"
              alt=""
            />
            <div className="flex justify-center items-center mt-5 gap-5">
              <p className="text-sm md:text-base text-color-3 tracking-[0.01rem] leading-4 md:leading-6 font-bold text-center">
                <span className="block">74 ק”ג</span>
                <span className="block">25% שומן</span>
              </p>
              <img src={'/assets/svg/left-arrow.svg'} alt="" />
              <p className="text-sm md:text-base text-color-3 tracking-[0.01rem] leading-4 md:leading-6 font-normal text-center">
                <span className="block">52 ק”ג</span>
                <span className="block">12% שומן</span>
              </p>
            </div>
            <h3 className="text-lg md:text-xl text-color-1 tracking-[0.013rem] leading-6 font-bold text-center mt-4">
              3 חודשי עבודה משתלמת
            </h3>
          </div>
          <div className="w-[18.125rem] mx-auto p-3 md:p-5 rounded-[1.25rem] lg-background">
            <h3 className="text-base md:text-xl text-color-3 tracking-[0.013rem] leading-5 md:leading-6 font-bold text-center mb-5">
              ג’, בת 22, הרזייה
            </h3>
            <img
              src={'assets/images/fitness-goals.png'}
              className="w-[15.625rem] h-[15.625rem] mx-auto rounded-[1.25rem] shadow-[0_0_1.563rem_0_rgba(0,0,0,0.2)]"
              alt=""
            />
            <div className="flex justify-center items-center mt-5 gap-5">
              <p className="text-sm md:text-base text-color-3 tracking-[0.01rem] leading-4 md:leading-6 font-bold text-center">
                <span className="block">74 ק”ג</span>
                <span className="block">25% שומן</span>
              </p>
              <img src={'/assets/svg/left-arrow.svg'} alt="" />
              <p className="text-sm md:text-base text-color-3 tracking-[0.01rem] leading-4 md:leading-6 font-normal text-center">
                <span className="block">52 ק”ג</span>
                <span className="block">12% שומן</span>
              </p>
            </div>
            <h3 className="text-lg md:text-xl text-color-1 tracking-[0.013rem] leading-6 font-bold text-center mt-4">
              3 חודשי עבודה משתלמת
            </h3>
          </div>
          <div className="w-[18.125rem] mx-auto p-3 md:p-5 rounded-[1.25rem] lg-background">
            <h3 className="text-base md:text-xl text-color-3 tracking-[0.013rem] leading-5 md:leading-6 font-bold text-center mb-5">
              ג’, בת 22, הרזייה
            </h3>
            <img
              src={'assets/images/fitness-goals.png'}
              className="w-[15.625rem] h-[15.625rem] mx-auto rounded-[1.25rem] shadow-[0_0_1.563rem_0_rgba(0,0,0,0.2)]"
              alt=""
            />
            <div className="flex justify-center items-center mt-5 gap-5">
              <p className="text-sm md:text-base text-color-3 tracking-[0.01rem] leading-4 md:leading-6 font-bold text-center">
                <span className="block">74 ק”ג</span>
                <span className="block">25% שומן</span>
              </p>
              <img src={'/assets/svg/left-arrow.svg'} alt="" />
              <p className="text-sm md:text-base text-color-3 tracking-[0.01rem] leading-4 md:leading-6 font-normal text-center">
                <span className="block">52 ק”ג</span>
                <span className="block">12% שומן</span>
              </p>
            </div>
            <h3 className="text-lg md:text-xl text-color-1 tracking-[0.013rem] leading-6 font-bold text-center mt-4">
              3 חודשי עבודה משתלמת
            </h3>
          </div>
          <div className="w-[18.125rem] mx-auto p-3 md:p-5 rounded-[1.25rem] lg-background">
            <h3 className="text-base md:text-xl text-color-3 tracking-[0.013rem] leading-5 md:leading-6 font-bold text-center mb-5">
              ג’, בת 22, הרזייה
            </h3>
            <img
              src={'assets/images/fitness-goals.png'}
              className="w-[15.625rem] h-[15.625rem] mx-auto rounded-[1.25rem] shadow-[0_0_1.563rem_0_rgba(0,0,0,0.2)]"
              alt=""
            />
            <div className="flex justify-center items-center mt-5 gap-5">
              <p className="text-sm md:text-base text-color-3 tracking-[0.01rem] leading-4 md:leading-6 font-bold text-center">
                <span className="block">74 ק”ג</span>
                <span className="block">25% שומן</span>
              </p>
              <img src={'/assets/svg/left-arrow.svg'} alt="" />
              <p className="text-sm md:text-base text-color-3 tracking-[0.01rem] leading-4 md:leading-6 font-normal text-center">
                <span className="block">52 ק”ג</span>
                <span className="block">12% שומן</span>
              </p>
            </div>
            <h3 className="text-lg md:text-xl text-color-1 tracking-[0.013rem] leading-6 font-bold text-center mt-4">
              3 חודשי עבודה משתלמת
            </h3>
          </div>
          <div className="w-[18.125rem] mx-auto p-3 md:p-5 rounded-[1.25rem] lg-background">
            <h3 className="text-base md:text-xl text-color-3 tracking-[0.013rem] leading-5 md:leading-6 font-bold text-center mb-5">
              ג’, בת 22, הרזייה
            </h3>
            <img
              src={'assets/images/fitness-goals.png'}
              className="w-[15.625rem] h-[15.625rem] mx-auto rounded-[1.25rem] shadow-[0_0_1.563rem_0_rgba(0,0,0,0.2)]"
              alt=""
            />
            <div className="flex justify-center items-center mt-5 gap-5">
              <p className="text-sm md:text-base text-color-3 tracking-[0.01rem] leading-4 md:leading-6 font-bold text-center">
                <span className="block">74 ק”ג</span>
                <span className="block">25% שומן</span>
              </p>
              <img src={'/assets/svg/left-arrow.svg'} alt="" />
              <p className="text-sm md:text-base text-color-3 tracking-[0.01rem] leading-4 md:leading-6 font-normal text-center">
                <span className="block">52 ק”ג</span>
                <span className="block">12% שומן</span>
              </p>
            </div>
            <h3 className="text-lg md:text-xl text-color-1 tracking-[0.013rem] leading-6 font-bold text-center mt-4">
              3 חודשי עבודה משתלמת
            </h3>
          </div>
        </Slider>
      </div>
      <div className="mt-20 flex justify-center items-center">
        <a
          href=""
          target="_blank"
          className="inline-flex tracking-[0.013rem] justify-center items-center gap-2 h-[3.375rem] text-color-3 bg-color-2 py-[0.875rem] px-[1.5rem] rounded-[0.938rem] text-xl leading-6 font-bold shadow-[inset_0_0_0.938rem_rgba(0,0,0,0.35),0_0_1.563rem_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-color-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
        >
          אני רוצה להשיג תוצאות
          <img
            src={'/assets/svg/whatsapp-icon.svg'}
            alt=""
            className="w-5 h-5"
          />
        </a>
      </div>
    </section>
  );
};

export default Goals;
