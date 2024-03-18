import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import ClassesCard from './ClassesCard';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

let cardsData = [];

const Classes = ({ links }) => {
  const [section6, setSection6] = useState(null);
  const { whatsapp } = links;
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "section6"]{
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
          cards,
    }`
      )
      .then(data => {
        cardsData = data[0].cards;
        setSection6(data[0]);
      })
      .catch(console.error);
  }, []);
  if (!section6) return null;
  return (
    <section
      id="classes"
      className="max-w-[68.125rem] scroll-mt-20 mx-auto w-[calc(100%-2.5rem)]"
    >
      <div className="relative hidden lg:block mt-[6.25rem]">
        <img
          src={urlFor(section6.bannerImage).url()}
          alt=""
          className="w-full h-[18.75rem] shadow-[0_0.25rem_0.25rem_0_rgba(0,0,0,0.25)] rounded-[1.875rem] object-cover"
        />
        <div className="px-6 py-7 rounded-[1.25rem] bg-color-7 backdrop-blur-[1.25rem] absolute right-6 top-2/4 -translate-y-2/4">
          <p className="text-xl tracking-[0.038rem] leading-6 font-normal text-center [text-shadow:0_0_1.563rem_rgba(0,0,0,0.3)] mb-3">
            {section6.text1}
          </p>
          <h1 className="text-[2.125rem] tracking-[0.064rem] leading-9 font-black text-center [text-shadow:0_0_1.563rem_rgba(0,0,0,0.3)] mb-6">
            {section6.text2}
          </h1>
          <p className="text-lg tracking-[0.034rem] leading-5 font-normal text-center [text-shadow:0_0_1.563rem_rgba(0,0,0,0.3)] mb-6">
            {section6.text3}
            <span className="block">{section6.text4}</span>
          </p>
          <a
            href={whatsapp}
            target="_blank"
            className="flex w-fit mx-auto tracking-[0.013rem] justify-center items-center gap-2 h-[3.375rem] text-color-3 bg-color-2 py-[0.875rem] px-[1.5rem] rounded-[0.938rem] text-xl leading-6 font-bold shadow-[inset_0_0_0.938rem_rgba(0,0,0,0.35),0_0_1.563rem_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-color-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
          >
            {section6.buttonText}
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
          src={urlFor(section6.bannerImageMobile).url()}
          className="w-full rounded-[1.875rem]"
          alt=""
        />
        <div className="gradient-top absolute bottom-0 w-full h-full flex flex-col justify-end items-center" />
      </div>
      <div className="block  mt-[-7.5rem] sm:mt-[-10rem] relative lg:hidden">
        <p className="text-lg tracking-[0.038rem] leading-6 font-normal text-center [text-shadow:0_0_1.563rem_rgba(0,0,0,0.3)] mb-2">
          {section6.text1}
        </p>
        <h1 className="text-[1.875rem] tracking-[0.064rem] leading-9 font-black text-center [text-shadow:0_0_1.563rem_rgba(0,0,0,0.3)] mb-2">
          {section6.text2}
        </h1>
        <p className="text-base tracking-[0.034rem] leading-5 font-normal text-center [text-shadow:0_0_1.563rem_rgba(0,0,0,0.3)] mb-10">
          {section6.text3}
        </p>
      </div>

      <div className="mt-8 relative z-2 flex justify-center lg:justify-between items-center flex-wrap gap-7 lg:gap-6">
        {cardsData.map((item, index) => {
          return <ClassesCard key={index} data={item} />;
        })}
      </div>
      <div className="block mt-7 w-fit mx-auto lg:hidden">
        <a
          href={whatsapp}
          target="_blank"
          className="flex w-fit mx-auto tracking-[0.013rem] justify-center items-center gap-2 h-[3.375rem] text-color-1 bg-color-2 py-[0.875rem] px-[1.5rem] rounded-[0.938rem] text-xl leading-6 font-bold shadow-[inset_0_0_0.938rem_rgba(0,0,0,0.35),0_0_1.563rem_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-color-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
        >
          {section6.buttonText}
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

export default Classes;
