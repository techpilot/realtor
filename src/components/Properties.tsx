'use client';
import eatery_img from '@/assets/images/eatery.jpg';
import bar_img from '@/assets/images/bar.jpg';
import coffee_img from '@/assets/images/coffee-shop.jpg';
import chef_img from '@/assets/images/chef.jpg';
import PropertiesCard from './utils/cards/PropertiesCard';
import { useEffect, useState } from 'react';
import { fetchRates } from './utils/apis/api';

const list = [
  {
    name: 'Restaurants',
    description:
      'Craving unique dish type? We serve up delicious cuisines made fresh daily! Friendly atmosphere, perfect for dining occasion. Visit us today!',
    image: eatery_img
  },
  {
    name: 'Bar',
    description:
      'Craft cocktails & cozy vibes await!  Our friendly bar boasts unique drinks, delicious bites, and a perfect atmosphere to unwind or celebrate',
    image: bar_img
  },
  {
    name: 'Coffee Shop',
    description:
      'Crave handcrafted coffee & cozy vibes? Our shop brews magic! Aromatic beans, delectable pastries, and a warm atmosphere await. Unwind & recharge here. ',
    image: coffee_img
  },
  {
    name: 'Cooks',
    description:
      "Passionate chefs create flavorful dishes that'll tantalize your taste buds. We bring experience & creativity to every plate. Hire us for an unforgettable culinary experience!",
    image: chef_img
  }
];

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
    <div className="px-3 md:px-20 py-3 flex flex-col gap-[1rem] mb-[5rem]">
      <p className="text-center text-xl lg:text-3xl font-semibold text-[#012970] capitalize">
        Luxury
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem] mt-[2rem]">
        {list?.map((item, idx) => (
          <PropertiesCard
            key={idx}
            name={item.name}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Properties;
