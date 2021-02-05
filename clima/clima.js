const axios = require("axios");

const getClima = async (lat, lng) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=04256cf7c895ffd815a7d9433aa99ac0&units=metric`
  );

  return res.data.main.temp;
};

module.exports = {
  getClima,
};
