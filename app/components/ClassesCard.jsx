import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const ClassesCard = ({ data }) => {
  return (
    <div className="w-[9.063rem] h-[9.688rem] lg:w-[10.625rem] lg:h-[11rem] xl:w-[12.125rem] xl:h-[11.625rem] p-3 lg:p-4 xl:p-5 flex flex-col justify-center items-center gap-3 lg:gap-5 rounded-[20px] card-gradient-shadow">
      <img
        src={urlFor(data.icon).url()}
        className="block w-[2.5rem] h-[2.5rem] xl:w-[5rem] xl:h-[5rem]"
        alt=""
      />
      <h3 className="text-base md:text-lg  tracking-[0.011rem] leading-5 lg:text-xl lg:tracking-[0.013rem] lg:leading-6 text-center font-bold text-color-1">
        {data.cardText}
      </h3>
    </div>
  );
};

export default ClassesCard;
