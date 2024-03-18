import React, { useState, useEffect } from 'react';
import sanityClient from '../client';

const Professionals = ({ links }) => {
  const [section4, setSection4] = useState(null);
  const { whatsapp } = links;
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "section4"]{
      text1,
      text2,
      text3,
      text4,
      buttonText,
      sectionHeading,
      item1,
      subItem1,
      subItem2,
      item2,
      item3,
      item4,
      item5,
    }`
      )
      .then(data => {
        setSection4(data[0]);
      })
      .catch(console.error);
  }, []);
  if (!section4) return null;
  return (
    <section
      id="professionals"
      className="max-w-[68.125rem] scroll-mt-20 mx-auto w-[calc(100%-2.5rem)]"
    >
      <div className="mt-[6.25rem] flex-col lg:flex-row text-center lg:text-right flex justify-between items-center gap-7 lg:gap-10 xl:gap-16">
        <div className="flex-1 flex-col flex gap-5 lg:gap-6 justify-center">
          <h2 className="text-[1.875rem] md:text-[2.125rem] tracking-[0.021rem] leading-8 md:leading-9 font-black">
            {section4.text1}
          </h2>
          <h3 className="text-[1.5rem] md:text-[1.75rem] tracking-[0.018rem] leading-7 md:leading-8 font-bold text-color-2">
            {section4.text2}
          </h3>
          <p className="text-lg tracking-[0.021rem] leading-6 font-normal">
            {section4.text3}
            <span className="block font-bold mt-6">{section4.text4}</span>
          </p>
          <a
            href={whatsapp}
            target="_blank"
            className="hidden w-fit lg:inline-flex tracking-[0.013rem] justify-center items-center gap-2 h-[3.375rem] text-color-1 bg-color-2 py-[0.875rem] px-[1.5rem] rounded-[0.938rem] text-xl leading-6 font-bold shadow-[inset_0_0_0.938rem_rgba(0,0,0,0.35),0_0_1.563rem_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-color-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
          >
            {section4.buttonText}
            <img
              src={'/assets/svg/whatsapp-icon.svg'}
              alt=""
              className="w-5 h-5"
            />
          </a>
        </div>
        <div className="w-full lg:w-[28.125rem] card-gradient-shadow py-5 px-5 lg:py-6 lg:px-6 rounded-[1.25rem] flex-col flex gap-5 lg:gap-6 justify-center text-color-1">
          <h2 className="text-[1.875rem] tracking-[0.087rem] leading-7 font-bold lg:text-[2.125rem] lg:tracking-[0.046rem] lg:leading-9 lg:font-black underline text-center">
            {section4.sectionHeading}
          </h2>
          <ul className="flex-col flex gap-5  text-base leading-5 lg:text-lg text-right lg:leading-5 font-bold text-color-1">
            <li>{section4.item1}</li>
            <li>{section4.item2}</li>
            <li>{section4.item3}</li>
            <li>{section4.item4}</li>
            <li>{section4.item5}</li>
          </ul>
        </div>
        <div className="block lg:hidden">
          <a
            href={whatsapp}
            target="_blank"
            className="w-fit mx-auto lg:mx-0 inline-flex tracking-[0.013rem] justify-center items-center gap-2 h-[3.375rem] text-color-1 bg-color-2 py-[0.875rem] px-[1.5rem] rounded-[0.938rem] text-xl leading-6 font-bold shadow-[inset_0_0_0.938rem_rgba(0,0,0,0.35),0_0_1.563rem_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-color-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
          >
            {section4.buttonText}
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
