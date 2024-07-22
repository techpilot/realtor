import PropertyBanner from './PropertyBanner';
import AgentCard from './utils/cards/AgentCard';
import { list } from '@/components/utils/data/data';
import NotFound from '@/components/utils/common/NotFound';

const PropertyDetails = () => {
  const urlParts = window.location.pathname.split('/');
  const selectedText = urlParts[2];

  const pageData = list.find(
    (item) => item.name.toLowerCase().replace(/\s+/g, '-') === selectedText
  );

  if (pageData === undefined || pageData === null) {
    return <NotFound />;
  }

  return (
    <div>
      <PropertyBanner image={pageData?.image} />

      <div className="px-3 md:px-20 xl:px-32 flex flex-col lg:flex-row justify-between gap-5 mt-[2rem]">
        <div className="w-full md:w-[85%]">
          <div className="flex flex-col gap-2">
            <p className="text-2xl text-black font-medium">{pageData?.price}</p>
            <p className="text-lg capitalize text-black font-medium">
              {pageData?.name}
            </p>
            <p className="text-base capitalize text-gray-700 font-light">
              {pageData?.location}
            </p>

            {/* <p className="text-base capitalize text-gray-700 font-light">
              Washington Virginia Vale Neighborhood
            </p> */}
          </div>

          <div className="flex flex-col gap-2 mt-[1.5rem]">
            <p className="text-lg capitalize text-black font-medium">
              About this Home
            </p>

            <p className="text-base text-gray-700 font-light">
              {pageData?.description}
            </p>
          </div>
        </div>

        <AgentCard name={pageData?.agent} phone={pageData?.agent_phone} />
      </div>
    </div>
  );
};

export default PropertyDetails;
