const NavSocials = () => {
  return (
    <div
      id="socials"
      className="max-w-[68.125rem] mx-auto w-[calc(100%-1.25rem)] mt-[6.25rem]"
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-[3.75rem]">
        <div className="w-[18.75rem] order-2 md:-order-none">
          <h2 className="text-[1.875rem] md:text-[2.125rem] tracking-[0.021rem] leading-8 md:leading-9 font-black text-center mb-5">
            באים להתאמן, חוזרים בגלל החוויה
          </h2>
          <a
            href=""
            target="_blank"
            className="block h-[18.75rem] w-[18.75rem] rounded-[1.25rem] object-cover card-gradient-shadow"
          >
            <img
              src={'assets/images/social-insta.png'}
              className="object-cover"
              alt=""
            />
          </a>
          <p className="text-base md:text-lg tracking-[0.011rem] leading-5 font-normal text-center mt-5">
            המתאמנים שלנו מתים על המקום החדש! בואו פשוט ניתן לצילומים לדבר 📸
          </p>
        </div>
        <div className="w-[18.75rem]">
          <h2 className="text-[1.875rem] md:text-[2.125rem] tracking-[0.021rem] leading-8 md:leading-9 font-black text-center mb-5">
            אתם כבר מוכנים להשקיע בעצמכם?
          </h2>
          <div className="card-gradient-shadow h-[18.75rem] flex flex-col gap-6 rounded-[1.25rem] p-4 text-color-1">
            <div>
              <h2 className="text-[2.5rem] tracking-[0.028rem] leading-10 font-black text-center">
                אז קדימה,
              </h2>
              <p className="text-lg tracking-[0.011rem] leading-5 font-semibold text-center mt-3">
                ותגיעו להתאמן
                <span className="underline"> קחו את עצמכם!</span>
              </p>
            </div>
            <div className="flex justify-center items-center gap-8">
              <a href="" target="_blank">
                <img
                  src={'assets/images/google-icon.png'}
                  className="w-[5rem] h-[5rem] object-cover"
                  alt=""
                />
              </a>
              <a href="" target="_blank">
                <img
                  src={'assets/images/waze-icon.png'}
                  className="w-[5rem] h-[5rem] object-cover"
                  alt=""
                />
              </a>
            </div>
            <p className="text-base tracking-[0.011rem] leading-5 font-normal text-center text-color-1">
              לחצו על הלינקים כאן 👆
              <span className="block">או כתבו בGPS: “פרו אקטיב - אפיק”</span>
            </p>
          </div>
          <p className="text-base tracking-[0.011rem] leading-5 font-normal text-center mt-5">
            הידעת? מחקרים מראים שמתאמנים מאושרים יותר ב52% יותר מאלה שלא!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavSocials;
