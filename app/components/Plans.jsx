'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Plans = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    touchThreshold: 100,
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
    <div
      id="plans"
      className="max-w-[68.125rem] mx-auto lg:w-[calc(100%-1.25rem)] mt-[6.25rem]"
    >
      <h2 className="text-[1.875rem] md:text-[2.125rem] px-4 md:px-0 tracking-[0.021rem] leading-9 font-black text-center mb-5">
        נוח כמו טרנינג
      </h2>
      <p className="text-lg md:text-xl px-4 md:px-0 tracking-[0.038rem] leading-6 font-normal text-center max-w-[37.5rem] mx-auto mb-8">
        באימונים אין הטבות, במחיר אולי יש:
        <span className="font-light"> נכים ואזרחים ותיקים</span>
      </p>
      <div className="relative before:absolute after:absolute before:top-0 before:left-0 before:w-1/3 before:z-10 before:h-full before:lg-left-background after:top-0 after:right-0 after:w-1/3 after:z-10 after:h-full after:lg-right-background mb-8">
        <Slider {...settings}>
          <div className="overflow-hidden relative w-[18.125rem] mx-auto p-3 md:p-5 rounded-[1.25rem] lg-background">
            <div className="flex justify-between items-center gap-3 mb-5">
              <p className="text-xl tracking-[0.013rem] leading-6 font-normal px-3 py-1 bg-color-1 rounded-[0.625rem]">
                מנוי שנתי
              </p>
              <h3 className="text-xl text-color-1 tracking-[0.013rem] leading-6 font-bold">
                ₪275 לחודש
              </h3>
            </div>
            <img
              src={'assets/images/plans-placeholder.png'}
              className="w-[14.688rem] h-[14.688rem] object-cover rounded-full mx-auto"
              alt=""
            />

            <div className="text-xl tracking-[0.013rem] leading-6 font-bold px-6 text-center py-3 bg-color-1 absolute -right-12 bottom-8 w-[13.125rem] -rotate-45">
              הכי משתלם
            </div>
          </div>
          <div className="overflow-hidden relative w-[18.125rem] mx-auto p-3 md:p-5 rounded-[1.25rem] lg-background">
            <div className="flex justify-between items-center gap-3 mb-5">
              <p className="text-xl tracking-[0.013rem] leading-6 font-normal px-3 py-1 bg-color-1 rounded-[0.625rem]">
                מנוי שנתי
              </p>
              <h3 className="text-xl text-color-1 tracking-[0.013rem] leading-6 font-bold">
                ₪275 לחודש
              </h3>
            </div>
            <img
              src={'assets/images/plans-placeholder.png'}
              className="w-[14.688rem] h-[14.688rem] object-cover rounded-full mx-auto"
              alt=""
            />

            <div className="text-xl tracking-[0.013rem] leading-6 font-bold px-6 text-center py-3 bg-color-1 absolute -right-12 bottom-8 w-[13.125rem] -rotate-45">
              הכי משתלם
            </div>
          </div>
          <div className="overflow-hidden relative w-[18.125rem] mx-auto p-3 md:p-5 rounded-[1.25rem] lg-background">
            <div className="flex justify-between items-center gap-3 mb-5">
              <p className="text-xl tracking-[0.013rem] leading-6 font-normal px-3 py-1 bg-color-1 rounded-[0.625rem]">
                מנוי שנתי
              </p>
              <h3 className="text-xl text-color-1 tracking-[0.013rem] leading-6 font-bold">
                ₪275 לחודש
              </h3>
            </div>
            <img
              src={'assets/images/plans-placeholder.png'}
              className="w-[14.688rem] h-[14.688rem] object-cover rounded-full mx-auto"
              alt=""
            />

            <div className="text-xl tracking-[0.013rem] leading-6 font-bold px-6 text-center py-3 bg-color-1 absolute -right-12 bottom-8 w-[13.125rem] -rotate-45">
              הכי משתלם
            </div>
          </div>
          <div className="overflow-hidden relative w-[18.125rem] mx-auto p-3 md:p-5 rounded-[1.25rem] lg-background">
            <div className="flex justify-between items-center gap-3 mb-5">
              <p className="text-xl tracking-[0.013rem] leading-6 font-normal px-3 py-1 bg-color-1 rounded-[0.625rem]">
                מנוי שנתי
              </p>
              <h3 className="text-xl text-color-1 tracking-[0.013rem] leading-6 font-bold">
                ₪275 לחודש
              </h3>
            </div>
            <img
              src={'assets/images/plans-placeholder.png'}
              className="w-[14.688rem] h-[14.688rem] object-cover rounded-full mx-auto"
              alt=""
            />

            <div className="text-xl tracking-[0.013rem] leading-6 font-bold px-6 text-center py-3 bg-color-1 absolute -right-12 bottom-8 w-[13.125rem] -rotate-45">
              הכי משתלם
            </div>
          </div>
          <div className="overflow-hidden relative w-[18.125rem] mx-auto p-3 md:p-5 rounded-[1.25rem] lg-background">
            <div className="flex justify-between items-center gap-2 md:gap-3 mb-5">
              <p className="text-base md:text-xl tracking-[0.013rem] leading-6 font-normal px-2 py-1 bg-color-1 rounded-[0.625rem]">
                מנוי שנתי
              </p>
              <h3 className="text-base md:text-xl text-color-1 tracking-[0.013rem] leading-6 font-bold">
                ₪275 לחודש
              </h3>
            </div>
            <img
              src={'assets/images/plans-placeholder.png'}
              className="w-[14.688rem] h-[14.688rem] object-cover rounded-full mx-auto"
              alt=""
            />

            <div className="text-base md:text-xl tracking-[0.013rem] leading-6 font-bold px-6 text-center py-3 bg-color-1 absolute -right-12 bottom-8 w-[13.125rem] -rotate-45">
              הכי משתלם
            </div>
          </div>
        </Slider>
      </div>
      <div className="mt-20 flex justify-center items-center">
        <a
          href=""
          target="_blank"
          className="inline-flex tracking-[0.013rem] justify-center items-center gap-2 h-[3.375rem] text-color-3 bg-color-2 py-[0.875rem] px-[1.5rem] rounded-[0.938rem] text-xl leading-6 font-bold shadow-[inset_0_0_0.938rem_rgba(0,0,0,0.35),0_0_1.563rem_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-color-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          קדימה, אין תירוצים
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

export default Plans;
