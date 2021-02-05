const axios = require("axios");
// Se recibe el parametro dir
const getLugar = async (dir) => {
  // se escapa la url
  const encodedUrl = encodeURI(dir);

  const instance = axios.create({
    // baseURL: `https://restcountries.eu/rest/v2/name/${encodedUrl}`,
    baseURL: `https://restcountries.eu/rest/v2/name/${encodedUrl}?fields=name;capital;subregion;callingCodes;latlng;timezones`,

    headers: {
      "x-rapidapi-key": "c9dff9fcd1msh8a4e0a42eb1a3bep1bfe32jsn3fc62d336d4b",
    },
  });

  const res = await instance.get();

  if (res.data.length === 0) {
    throw new Error(`No hay resultados para ${dir}`);
  }

  const data = res.data[0];
  const name = data.name;
  const capital = data.capital;
  const subregion = data.subregion;
  const callingCodes = data.callingCodes;
  const latlng = data.latlng;
  const lat = data.latlng[0];
  const lng = data.latlng[1];
  const timezones = data.timezones;

  //   for (i = 0; i <= latlng.length; i++) {
  //     console.log(latlng[i]);
  //   }

  // console.log(latlng);

  return {
    name,
    capital,
    subregion,
    callingCodes,
    lng,
    lat,
    timezones,
  };
};

module.exports = {
  getLugar,
};
