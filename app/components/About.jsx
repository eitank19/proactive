'use client';
import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
const About = ({ links }) => {
  const [section7, setSection7] = useState(null);
  const { whatsapp } = links;
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "section7"]{
      text1,
      text2,
      text3,
      text4,
      buttonText,
      heading1,
      desc1,
      heading2,
      desc2,
    }`
      )
      .then(data => {
        setSection7(data[0]);
      })
      .catch(console.error);
  }, []);
  if (!section7) return null;
  return (
    <section
      id="about"
      className="max-w-[68.125rem] scroll-mt-20 mx-auto w-[calc(100%-2.5rem)]"
    >
      <div className="mt-[6.25rem]  flex-col lg:flex-row flex justify-between items-center gap-7 lg:gap-10 xl:gap-16">
        <div className="flex-1 flex-col flex gap-0 lg:gap-5">
          <h2 className="text-[1.875rem] md:text-[2.125rem] tracking-[0.021rem] leading-8 md:leading-9 text-center lg:text-right font-black mb-5 lg:mb-0">
            {section7.text1}
          </h2>
          <h3 className="text-lg lg:text-[1.75rem] tracking-[0.018rem] leading-6 lg:leading-8 text-center lg:text-right font-bold  lg:text-color-2">
            {section7.text2}
          </h3>
          <p className="text-lg tracking-[0.021rem] leading-6 font-normal text-center lg:text-right">
            {section7.text3}
            <span className="block mt-5 lg:mt-0 lg:inline lg:font-bold">
              {section7.text4} 🫶
            </span>
          </p>
          <a
            href={whatsapp}
            target="_blank"
            className="hidden w-fit lg:inline-flex tracking-[0.013rem] justify-center items-center gap-2 h-[3.375rem] text-color-1 bg-color-2 py-[0.875rem] px-[1.5rem] rounded-[0.938rem] text-xl leading-6 font-bold shadow-[inset_0_0_0.938rem_rgba(0,0,0,0.35),0_0_1.563rem_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-color-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
          >
            {section7.buttonText}
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
                {section7.heading1}
              </h3>
              <p className="text-base leading-5 tracking-[0.015rem] font-light text-center">
                {section7.desc1}
              </p>
            </div>
          </div>
          <div className="w-[17.188rem] relative">
            <img src={'assets/images/naor-card.png'} alt="" />
            <div className="absolute bottom-6 px-8">
              <h3 className="text-[1.5rem] leading-7 tracking-[0.015rem] font-bold mb-3 text-center">
                {section7.heading2}
              </h3>
              <p className="text-base leading-5 tracking-[0.015rem] font-light text-center">
                {section7.desc2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
