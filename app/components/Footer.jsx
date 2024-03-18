import React, { useState, useEffect } from 'react';
import sanityClient from '../client';

const Footer = ({ links }) => {
  const [footer, setFooter] = useState(null);
  const { whatsapp } = links;
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "footer"]{
      text1,
      text2,
      buttonText,
      text4,
      text5,
      text6,
      text7,
      text8,
      text9,
      text10,
      text11,
      text12,
      text13,
      text14,
    }`
      )
      .then(data => {
        setFooter(data[0]);
      })
      .catch(console.error);
  }, []);
  if (!footer) return null;
  return (
    <footer className="mt-[6.25rem]">
      <div className="bg-color-5 py-8">
        <div className="max-w-[68.125rem] mx-auto w-[calc(100%-2.5rem)] flex-col md:flex-row md:flex-wrap justify-center lg:flex-nowrap flex items-center md:items-start lg:justify-between gap-8 lg:gap-4 xl:gap-8">
          <div className="w-[20.625rem] md:w-[21.25rem]">
            <h2 className="text-[1.5rem] md:text-[2.125rem] leading-7 md:leading-[2.5rem] font-black text-center md:text-right">
              {footer.text1}
              <span className="block text-lg md:text-[1.375rem] leading-6 md:leading-7 font-black text-center md:text-right md:mb-4">
                {footer.text2}
              </span>
            </h2>
            <a
              href={whatsapp}
              target="_blank"
              className="hidden md:inline-flex tracking-[0.013rem] justify-center items-center gap-2 h-[3.375rem] text-color-1 bg-color-2 py-[0.875rem] px-[1.5rem] rounded-[0.938rem] text-xl leading-6 font-bold shadow-[inset_0_0_0.938rem_rgba(0,0,0,0.35),0_0_1.563rem_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-color-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
            >
              {footer.buttonText}
              <img
                src={'/assets/svg/whatsapp-icon.svg'}
                alt=""
                className="w-5 h-5"
              />
            </a>
          </div>
          <div className="w-[20.625rem] md:w-[21.25rem]">
            <p className="text-base md:text-lg tracking-[0.011rem] leading-5 font-normal text-center md:text-right mb-5">
              {footer.text4}
            </p>
            <a
              href="tel:054-554-3345"
              className="block text-base md:text-lg tracking-[0.011rem] leading-5 font-normal text-center md:text-right"
            >
              {footer.text5}
            </a>
            <a
              href="tel:050-777-6656"
              className="block text-base md:text-lg tracking-[0.011rem] leading-5 font-normal text-center md:text-right"
            >
              {footer.text6}
            </a>
            <a
              href="tel:050-334-5467"
              className="block text-base md:text-lg tracking-[0.011rem] leading-5 font-normal text-center md:text-right"
            >
              {footer.text7}
            </a>
          </div>
          <div className="w-[20.625rem] md:w-[21.25rem]">
            <h4 className="block text-base md:text-lg tracking-[0.011rem] leading-5 font-bold text-center md:text-right mb-5">
              {footer.text8}
            </h4>
            <ul>
              <li className="text-base md:text-lg tracking-[0.011rem] leading-5 font-normal text-center md:text-right">
                <span className="pl-1">&#8226;</span>
                {footer.text9}
              </li>
              <li className="text-base md:text-lg tracking-[0.011rem] leading-5 font-normal text-center md:text-right">
                <span className="pl-1">&#8226;</span>
                {footer.text10}
              </li>
              <li className="text-base md:text-lg tracking-[0.011rem] leading-5 font-normal text-center md:text-right">
                <span className="pl-1">&#8226;</span>
                {footer.text11}
              </li>
              <li className="text-base md:text-lg tracking-[0.011rem] leading-5 font-normal text-center md:text-right">
                <span className="pl-1">&#8226;</span>
                {footer.text12}
              </li>
              <li className="text-base md:text-lg tracking-[0.011rem] leading-5 font-normal text-center md:text-right">
                <span className="pl-1">&#8226;</span>
                {footer.text13}
              </li>
            </ul>
          </div>
          <div className="block md:hidden">
            <a
              href={whatsapp}
              target="_blank"
              className="inline-flex tracking-[0.013rem] justify-center items-center gap-2 h-[3.375rem] text-color-1 bg-color-2 py-[0.875rem] px-[1.5rem] rounded-[0.938rem] text-xl leading-6 font-bold shadow-[inset_0_0_0.938rem_rgba(0,0,0,0.35),0_0_1.563rem_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-color-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
            >
              {footer.buttonText}
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
        {footer.text14}
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
