import Image from 'next/image';

interface PropertyBannerProps {
  image?: any;
}

const PropertyBanner: React.FC<PropertyBannerProps> = ({ image }) => {
  return (
    <div className="relative w-full h-[50vh] flex justify-between gap-1">
      <div className="h-full w-[35%]">
        <Image
          src={image}
          alt=""
          className="h-full max-h-[50vh] w-full object-cover"
        />
      </div>

      <div className="flex-1 h-full grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-1">
        <Image
          src={image}
          alt=""
          className="h-full max-h-[24.8vh] w-full object-cover"
        />
        <Image
          src={image}
          alt=""
          className="h-full max-h-[24.8vh] w-full object-cover"
        />
        <Image
          src={image}
          alt=""
          className="h-full max-h-[24.8vh] w-full object-cover"
        />
        <Image
          src={image}
          alt=""
          className="h-full max-h-[24.8vh] w-full object-cover"
        />
        <Image
          src={image}
          alt=""
          className="h-full max-h-[24.8vh] w-full object-cover"
        />
        <Image
          src={image}
          alt=""
          className="h-full max-h-[24.8vh] w-full object-cover"
        />
      </div>
    </div>
  );
};

export default PropertyBanner;
