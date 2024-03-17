"use client";

import Menu from "./Menu";
import CrossIcon from "../../public/assets/svg/cross-icon.svg";
import HamburgerIcon from "../../public/assets/svg/hamburger-icon.svg";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import sanityClient from "../client";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [links, setLinks] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "socialUrls"]{
      whatsapp,
      instagram,
      gmaps,
      waze,
    }`
      )
      .then((data) => {
        setLinks(data[0]);
      })
      .catch(console.error);
  }, []);
  if (!links) return null;
  const { whatsapp } = links;
  return (
    <header className="fixed w-full top-0 z-20">
      <div className=" bg-color-5 py-[0.8rem] lg:py-[0.625rem] shadow-[0_0.25rem_1.563rem_0_rgba(0,0,0,0.25)]">
        <div className="max-w-[68.125rem] mx-auto w-[calc(100%-1.3rem)] flex justify-between items-center gap-5 xl:gap-6">
          <a
            href={whatsapp}
            target="_blank"
            className="flex justify-center items-center gap-2 h-[2.25rem] lg:h-[2.75rem] text-color-3 bg-color-2 py-[0.5rem] px-[0.75rem] lg:py-[0.625rem] lg:px-[0.875rem] rounded-[0.625rem] text-base leading-4 lg:text-xl lg:leading-6 tracking-[0.009rem] lg:tracking-[0.013rem] font-bold shadow-[inset_0_0_0.938rem_rgba(0,0,0,0.35),0_0_1.563rem_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-color-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
          >
            <span>להצטרפות</span>
            <img
              src={"/assets/svg/whatsapp-icon.svg"}
              alt=""
              className="hidden lg:block w-5 h-5"
            />
          </a>
          <Menu />
          <div className="relative flex items-center gap-4">
            <a href="#" className="block ml-14 lg:ml-0">
              <img
                src={"/assets/svg/pro-active.svg"}
                alt=""
                className="w-[7.875rem] h-[1rem] lg:h-[1.375rem] xl:w-auto"
              />
            </a>
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className={
                "lg:hidden absolute h-[2.813rem] w-[2.813rem] rounded-md flex justify-center items-center left-0 shadow-[inset_0_0_0.938rem_0_rgba(0,0,0,0.35),0_0.25rem_0.938rem_0_rgba(0,0,0,0.85),0_0_1.563rem_0_rgba(0,0,0,0.15)]" +
                (showMobileMenu ? " bg-color-5" : " bg-color-2")
              }
            >
              {showMobileMenu ? <CrossIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </div>
      {showMobileMenu && <MobileMenu />}
    </header>
  );
};

export default Header;
