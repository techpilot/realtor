import bg_img from '@/assets/images/banner_img.png';
import search_icon from '@/assets/svgs/search-icon.svg';
import Image from 'next/image';
import Header from './utils/common/Header';

const Banner = () => {
  return (
    <div className="relative w-full h-[65vh]">
      <Image
        src={bg_img}
        alt=""
        className="w-full h-full object-cover border-t-4 border-[#492433]"
      />

      <div className="absolute top-2 md:top-3 right-0 left-0 z-20">
        <Header />
      </div>

      <div className="absolute flex flex-col gap-3 md:gap-7 justify-center items-center top-0 right-0 bottom-0 left-0 px-3 md:px-0">
        <p className="text-2xl md:text-4xl text-center md:text-left font-semibold">
          Find a home in a neighborhood you love.
        </p>

        <div className="flex items-center justify-between gap-2 bg-white p-3 rounded-3xl w-full md:w-[30rem]">
          <input
            placeholder="Place, Neighbourhood, School or Agent"
            className="flex-1 bg-white border-none outline-none text-sm text-[#492433] px-2"
          />
          <Image src={search_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
