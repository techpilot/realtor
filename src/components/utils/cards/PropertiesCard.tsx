'use client';

import Image from 'next/image';
import x_icon from '@/assets/svgs/twitter-icon.svg';
import facebook_icon from '@/assets/svgs/facebook-icon.svg';
import instagram_icon from '@/assets/svgs/instagram-icon.svg';
import location_icon from '@/assets/svgs/location-icon.svg';
import { useState } from 'react';

interface PropertiesCardProps {
  name?: string;
  description?: string;
  image?: any;
}

const PropertiesCard: React.FC<PropertiesCardProps> = ({
  name,
  description,
  image
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      className="bg-white shadow-lg h-[28rem] rounded-md flex flex-col 
        items-center gap-5 md:hover:scale-105 lg:hover:scale-110 transition duration-500 cursor-pointer"
    >
      <div className="w-full h-[15rem] relative">
        <Image
          src={image}
          alt=""
          className="max-h-full min-h-full max-w-full min-w-full object-cover rounded-t-md"
        />

        {hovered && (
          <div className="absolute right-2 top-2 slide-in-right">
            <div
              className=" flex flex-col gap-2 px-1 py-2 rounded-md bg-white 
          bg-opacity-60 transition ease-in-out duration-700"
            >
              <Image
                src={x_icon}
                alt=""
                className="h-[22px] w-[22px] cursor-pointer"
              />
              <Image
                src={facebook_icon}
                alt=""
                className="h-[22px] w-[22px] cursor-pointer"
              />
              <Image
                src={instagram_icon}
                alt=""
                className="h-[22px] w-[22px] cursor-pointer"
              />
              <Image
                src={location_icon}
                alt=""
                className="h-[22px] w-[22px] cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center gap-1 p-3 lg:p-3 pt-0 text-center">
        <p className="lg:text-xl text-[#012970] capitalize font-semibold">
          {name}
        </p>
        <p className="text-xs lg:text-sm font-medium text-[#5e5e5e] italic leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PropertiesCard;
