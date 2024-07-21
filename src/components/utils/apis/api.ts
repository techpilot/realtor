// utils/fetchRates.js
import axios from 'axios';

export async function fetchRates(loc: string) {
  const url = `https://realty-in-us.p.rapidapi.com/finance/rates?loc=93505`;
  const options = {
    headers: {
      'X-Rapidapi-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      'X-Rapidapi-Host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST
    }
  };

  const response = await axios.get(url, options);
  console.log('response', response);
  return response.data;
}
