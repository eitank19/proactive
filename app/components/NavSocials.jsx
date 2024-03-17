import { useState, useEffect } from "react";
import sanityClient from "../client";

const NavSocials = ({ links }) => {
  const [section9, setSection9] = useState(null);
  const { instagram, gmaps, waze } = links;
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "section9"]{
      text1,
      text2,
      text3,
      text4,
      text5,
      text6,
      text7,
      text8,
      text9,
    }`
      )
      .then((data) => {
        setSection9(data[0]);
      })
      .catch(console.error);
  }, []);
  if (!section9) return null;
  return (
    <section
      id="socials"
      className="max-w-[68.125rem] scroll-mt-20 mx-auto w-[calc(100%-1.25rem)] mt-[6.25rem]"
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-[3.75rem]">
        <div className="w-[18.75rem] order-2 md:-order-none">
          <h2 className="text-[1.875rem] md:text-[2.125rem] tracking-[0.021rem] leading-8 md:leading-9 font-black text-center mb-5">
            {section9.text1}
          </h2>
          <a
            href={instagram}
            target="_blank"
            className="block h-[18.75rem] w-[18.75rem] rounded-[1.25rem] object-cover card-gradient-shadow"
          >
            <img
              src={"assets/images/social-insta.png"}
              className="object-cover"
              alt=""
            />
          </a>
          <p className="text-base md:text-lg tracking-[0.011rem] leading-5 font-normal text-center mt-5">
            {section9.text2}
          </p>
        </div>
        <div className="w-[18.75rem]">
          <h2 className="text-[1.875rem] md:text-[2.125rem] tracking-[0.021rem] leading-8 md:leading-9 font-black text-center mb-5">
            {section9.text3}
          </h2>
          <div className="card-gradient-shadow h-[18.75rem] flex flex-col gap-6 rounded-[1.25rem] p-4 text-color-1">
            <div>
              <h2 className="text-[2.5rem] tracking-[0.028rem] leading-10 font-black text-center">
                {section9.text4}
              </h2>
              <p className="text-lg tracking-[0.011rem] leading-5 font-semibold text-center mt-3">
                {section9.text5}
                <span className="underline"> {section9.text6}</span>
              </p>
            </div>
            <div className="flex justify-center items-center gap-8">
              <a href={gmaps} target="_blank">
                <img
                  src={"assets/images/google-icon.png"}
                  className="w-[5rem] h-[5rem] object-cover"
                  alt=""
                />
              </a>
              <a href={waze} target="_blank">
                <img
                  src={"assets/images/waze-icon.png"}
                  className="w-[5rem] h-[5rem] object-cover"
                  alt=""
                />
              </a>
            </div>
            <p className="text-base tracking-[0.011rem] leading-5 font-normal text-center text-color-1">
              {section9.text7}
              <span className="block">{section9.text8}</span>
            </p>
          </div>
          <p className="text-base tracking-[0.011rem] leading-5 font-normal text-center mt-5">
            {section9.text9}
          </p>
        </div>
      </div>
    </section>
  );
};

export default NavSocials;
