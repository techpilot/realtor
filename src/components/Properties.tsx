'use client';
import PropertiesCard from './utils/cards/PropertiesCard';
import { useEffect, useState } from 'react';
import { fetchRates } from './utils/apis/api';
import { list } from '@/components/utils/data/data';

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const getRates = async () => {
      try {
        const data = await fetchRates('93505');
        console.log(data);
      } catch (error) {
        console.log('fetch error', error);
      } finally {
      }
    };

    getRates();
  }, []);

  return (
    <div className="px-3 md:px-20 xl:px-40 py-3 flex flex-col gap-[0.5rem] mb-[5rem] mt-[2rem]">
      <p className="text-lg lg:text-xl font-medium text-[#492433] capitalize">
        Luxury Homes
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[0.6rem]">
        {list?.map((item, idx) => (
          <PropertiesCard
            key={idx}
            name={item.name}
            description={item.description}
            image={item.image}
            price={item.price}
            location={item.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Properties;
