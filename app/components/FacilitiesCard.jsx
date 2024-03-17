const FacilitiesCard = () => {
  return (
    <div className="w-full h-[4.375rem] lg:w-[10.625rem] lg:h-[11rem] xl:w-[12.125rem] xl:h-[11.625rem] p-5 lg:p-4 xl:p-5 flex lg:flex-col md:justify-center lg:justify-center justify-start items-center gap-5 rounded-[1.25rem] card-gradient-shadow">
      <img
        src={'assets/images/exercise-icon-1.png'}
        className="block w-8 h-8 lg:w-14 lg:h-14"
        alt=""
      />
      <h3 className="text-base md:text-lg w-[14.375rem] lg:w-auto tracking-[0.011rem] leading-5 lg:text-xl lg:tracking-[0.013rem] lg:leading-6 lg:text-center font-bold text-color-1">
        מגוון תוספי תזונה וגיינרים
      </h3>
    </div>
  );
};

export default FacilitiesCard;
