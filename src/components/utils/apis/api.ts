// utils/fetchRates.js
import axios from 'axios';

// api.bridgedataoutput.com/api/v2/OData/test/Property?access_token=6baca547742c6f96a6ff71b138424f21

export async function fetchRates() {
  const url = `https://realty-in-us.p.rapidapi.com/properties/v3/list-similar-homes?limit=10&status=for_sale`;
  const options = {
    headers: {
      'X-Rapidapi-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      'X-Rapidapi-Host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST
    }
  };

  const response = await axios.get(url, options);
  return response.data;
}
