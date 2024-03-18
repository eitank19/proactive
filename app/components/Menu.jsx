const Menu = () => {
  return (
    <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
      <a href="#professionals" className="text-lg leading-6 font-bold">
        פיתוח ספורטאים
      </a>
      <a href="#plans" className="text-lg leading-6 font-bold">
        מחירים
      </a>
      <a href="#classes" className="text-lg leading-6 font-bold">
        חוגים
      </a>
      <a href="#about" className="text-lg leading-6 font-bold">
        עלינו
      </a>
      <a href="#supplements" className="text-lg leading-6 font-bold">
        מוצרים נלווים
      </a>
      <a href="#socials" className="text-lg leading-6 font-bold">
        סושיאל
      </a>
    </nav>
  );
};

export default Menu;
