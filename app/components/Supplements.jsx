import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const Supplements = ({ links }) => {
  const [section8, setSection8] = useState(null);
  const { whatsapp } = links;
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "section8"]{
      bannerImage{
        asset->{
          _id,
          url
        },
      },
      bannerImageMobile{
        asset->{
          _id,
          url
        },
      },
      text1,
      text2,
      text3,
      text4,
      buttonText,
    }`
      )
      .then(data => {
        setSection8(data[0]);
      })
      .catch(console.error);
  }, []);
  if (!section8) return null;
  return (
    <section
      id="supplements"
      className="max-w-[68.125rem] scroll-mt-20 mx-auto w-[calc(100%-2.5rem)]"
    >
      <div className="relative hidden lg:block mt-[6.25rem]">
        <img
          src={urlFor(section8.bannerImage).url()}
          alt=""
          className="w-full h-[18.75rem] shadow-[0_0.25rem_0.25rem_0_rgba(0,0,0,0.25)] rounded-[1.875rem] object-cover"
        />
        <div className="px-6 py-7 rounded-[1.25rem] bg-color-7 backdrop-blur-[1.25rem] absolute left-6 top-2/4 -translate-y-2/4">
          <p className="text-xl tracking-[0.038rem] leading-6 font-normal text-center [text-shadow:0_0_1.563rem_rgba(0,0,0,0.3)] mb-3">
            {section8.text1}
          </p>
          <h1 className="text-[2.125rem] tracking-[0.064rem] leading-9 font-black text-center [text-shadow:0_0_1.563rem_rgba(0,0,0,0.3)] mb-6">
            {section8.text2}
          </h1>
          <p className="text-lg tracking-[0.034rem] leading-5 font-normal text-center [text-shadow:0_0_1.563rem_rgba(0,0,0,0.3)] mb-6">
            {section8.text3}
            <span className="block">{section8.text4}</span>
          </p>
          <a
            href={whatsapp}
            target="_blank"
            className="flex w-fit mx-auto tracking-[0.013rem] justify-center items-center gap-2 h-[3.375rem] text-color-1 bg-color-2 py-[0.875rem] px-[1.5rem] rounded-[0.938rem] text-xl leading-6 font-bold shadow-[inset_0_0_0.938rem_rgba(0,0,0,0.35),0_0_1.563rem_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-color-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
          >
            {section8.buttonText}
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
          src={urlFor(section8.bannerImageMobile).url()}
          className="w-full rounded-[1.875rem]"
          alt=""
        />
        <div className="gradient-top absolute bottom-0 w-full h-full flex flex-col justify-end items-center" />
      </div>
      <div className="block  mt-[-7.5rem] sm:mt-[-10rem] relative lg:hidden">
        <p className="text-lg tracking-[0.038rem] leading-6 font-normal text-center [text-shadow:0_0_1.563rem_rgba(0,0,0,0.3)] mb-2">
          {section8.text1}
        </p>
        <h1 className="text-[1.875rem] tracking-[0.064rem] leading-9 font-black text-center [text-shadow:0_0_1.563rem_rgba(0,0,0,0.3)] mb-2">
          {section8.text2}
        </h1>
        <p className="text-base tracking-[0.034rem] leading-5 font-normal text-center [text-shadow:0_0_1.563rem_rgba(0,0,0,0.3)] mb-7">
          {section8.text3}
        </p>
        <div className="flex justify-center items-center">
          <a
            href={whatsapp}
            target="_blank"
            className="flex w-fit mx-auto tracking-[0.013rem] justify-center items-center gap-2 h-[3.375rem] text-color-1 bg-color-2 py-[0.875rem] px-[1.5rem] rounded-[0.938rem] text-xl leading-6 font-bold shadow-[inset_0_0_0.938rem_rgba(0,0,0,0.35),0_0_1.563rem_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-color-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
          >
            {section8.buttonText}
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

export default Supplements;
