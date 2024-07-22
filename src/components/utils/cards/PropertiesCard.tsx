'use client';

import Image from 'next/image';
import x_icon from '@/assets/svgs/twitter-icon.svg';
import facebook_icon from '@/assets/svgs/facebook-icon.svg';
import instagram_icon from '@/assets/svgs/instagram-icon.svg';
import location_icon from '@/assets/svgs/location-icon.svg';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      className="bg-white shadow-lg h-[23rem] md:h-[24rem] xl:h-[23rem] rounded-sm flex flex-col 
       cursor-pointer"
      onClick={() => router.push(`/properties/2`)}
    >
      <div className="w-full h-[15rem] relative">
        <Image
          src={image}
          alt=""
          className="max-h-full min-h-full max-w-full min-w-full object-cover rounded-t-sm"
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
                className="h-[25px] w-[25px] cursor-pointer"
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

      <div className="flex flex-col gap-2 px-3 py-2">
        <div className="w-full flex items-center gap-2">
          <p className="text-sm text-black capitalize font-medium">
            $1,390,000
          </p>
          <div className="h-1 w-1 rounded-full bg-gray-400"></div>
          <p className="text-sm capitalize text-gray-700 font-light">
            3 Bedroom Apartment
          </p>
        </div>

        <p className="text-sm capitalize text-gray-700 font-light">
          1580 Pacific Ave Unit P4
        </p>

        <p className="text-sm text-gray-700 font-light">
          This is a 3 bedroom apartment for elites. Enjoy a luxurious treatment
          and have peace for once and all
        </p>
      </div>
    </div>
  );
};

export default PropertiesCard;
