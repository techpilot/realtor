// utils/fetchRates.js
import axios from 'axios';

export async function fetchRates(loc: string) {
  const url = `https://api.bridgedataoutput.com/api/v2/OData/test/Property?access_token=6baca547742c6f96a6ff71b138424f21`;
  const options = {
    // headers: {
    //   'X-Rapidapi-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    //   'X-Rapidapi-Host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST
    // }
  };

  const response = await axios.get(url, options);
  console.log('response', response);
  return response.data;
}
