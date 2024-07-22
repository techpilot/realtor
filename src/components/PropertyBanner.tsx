import Image from 'next/image';
import first_img from '@/assets/images/coffee-shop.jpg';

const PropertyBanner = () => {
  return (
    <div className="relative w-full h-[50vh] flex justify-between gap-1">
      <div className="h-full w-[35%]">
        <Image src={first_img} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="flex-1 h-full grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-1">
        <Image src={first_img} alt="" className="h-full w-full object-cover" />
        <Image src={first_img} alt="" className="h-full w-full object-cover" />
        <Image src={first_img} alt="" className="h-full w-full object-cover" />
        <Image src={first_img} alt="" className="h-full w-full object-cover" />
        <Image src={first_img} alt="" className="h-full w-full object-cover" />
        <Image src={first_img} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default PropertyBanner;
