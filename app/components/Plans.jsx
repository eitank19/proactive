'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const Plans = ({ links }) => {
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

  const [section5, setSection5] = useState(null);
  const [cards, setCards] = useState([]);
  const { whatsapp } = links;
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "section5"]{
      sectionHeading,
      sectionDesc,
      cards,
    }`
      )
      .then(data => {
        setSection5(data[0]);
        setCards(data[0].cards);
      })
      .catch(console.error);
  }, []);
  if (!section5) return null;

  return (
    <section
      id="plans"
      className="max-w-[68.125rem] scroll-mt-20 mx-auto lg:w-[calc(100%-2.5rem)] mt-[6.25rem]"
    >
      <h2 className="text-[1.875rem] md:text-[2.125rem] px-4 md:px-0 tracking-[0.021rem] leading-9 font-black text-center mb-5">
        {section5.sectionHeading}
      </h2>
      <p className="text-lg md:text-xl px-4 md:px-0 tracking-[0.038rem] leading-6 font-normal text-center max-w-[37.5rem] mx-auto mb-8">
        {section5.sectionDesc}
      </p>
      <div className="relative before:absolute after:absolute before:top-0 before:left-0 before:w-1/3 before:z-10 before:h-full before:lg-left-background after:top-0 after:right-0 after:w-1/3 after:z-10 after:h-full after:lg-right-background mb-8">
        <Slider {...settings}>
          {cards.map((card, index) => {
            return (
              <div
                key={index}
                className="overflow-hidden relative w-[18.125rem] mx-auto p-3 md:p-5 rounded-[1.25rem] lg-background"
              >
                <div className="flex justify-between items-center gap-3 mb-5">
                  <p className="text-xl tracking-[0.013rem] leading-6 font-normal px-3 py-1 bg-color-1 rounded-[0.625rem]">
                    {card.duration}
                  </p>
                  <h3 className="text-xl text-color-1 tracking-[0.013rem] leading-6 font-bold">
                    {card.price}
                  </h3>
                </div>
                <img
                  src={urlFor(card.cardImage).url()}
                  className="w-[14.688rem] h-[14.688rem] object-cover rounded-full mx-auto"
                  alt=""
                />

                <div className="text-xl tracking-[0.013rem] leading-6 font-bold px-6 text-center py-3 bg-color-1 absolute -right-12 bottom-8 w-[13.125rem] -rotate-45">
                  {card.tag}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="mt-20 flex justify-center items-center">
        <a
          href={whatsapp}
          target="_blank"
          className="inline-flex tracking-[0.013rem] justify-center items-center gap-2 h-[3.375rem] text-color-1 bg-color-2 py-[0.875rem] px-[1.5rem] rounded-[0.938rem] text-xl leading-6 font-bold shadow-[inset_0_0_0.938rem_rgba(0,0,0,0.35),0_0_1.563rem_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-color-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
        >
          קדימה, אין תירוצים
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

export default Plans;
