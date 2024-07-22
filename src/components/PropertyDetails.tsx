import PropertyBanner from './PropertyBanner';
import AgentCard from './utils/cards/AgentCard';

const PropertyDetails = () => {
  return (
    <div>
      <PropertyBanner />

      <div className="px-3 md:px-20 xl:px-32 flex flex-col lg:flex-row justify-between gap-5 mt-[2rem]">
        <div className="w-full md:w-[85%]">
          <div className="flex flex-col gap-2">
            <p className="text-2xl text-black font-medium">$1,390,000</p>
            <p className="text-lg capitalize text-black font-medium">
              3 Bedroom Apartment
            </p>
            <p className="text-base capitalize text-gray-700 font-light">
              1580 Pacific Ave Unit P4
            </p>

            <p className="text-base capitalize text-gray-700 font-light">
              Washington Virginia Vale Neighborhood
            </p>
          </div>

          <div className="flex flex-col gap-2 mt-[1.5rem]">
            <p className="text-lg capitalize text-black font-medium">
              About this Home
            </p>

            <p className="text-base text-gray-700 font-light">
              This is a 3 bedroom apartment for elites. Enjoy a luxurious
              treatment and have peace for once and all
            </p>
          </div>
        </div>

        <AgentCard />
      </div>
    </div>
  );
};

export default PropertyDetails;
