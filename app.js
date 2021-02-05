const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Dirección de la ciudad para obtener el clima",
    demand: true,
  },
}).argv;

// console.log(argv.direccion)
// Mi intento
// lugar.getLugar(argv.direccion).then(console.log);

// clima.getClima(40.750000, -74.000000).then(console.log).catch(console.log);

// const getInfo = (direccion) => {
//   lugar.getLugar(direccion).then((res) => {
//     let lng = res.lng;
//     let lat = res.lat;

//     const c = clima
//       .getClima(lng, lat)
//       .then((res) => {
//         console.log(`El clima de ${direccion} es de ${res}`);
//       })
//       .catch(console.log(`No se puso obtener el clima de ${direccion}`));
//   });

// clima.getClima(lugarObj.lng, lugarObj.lat).then(console.log);
// console.log(capital);
// };

// getInfo(argv.direccion);
const getInfo = async (direccion) => {
  try {
    const coords = await lugar.getLugar(direccion);
    const temp = await clima.getClima(coords.lat, coords.lng);
    return `El clima de ${direccion} es de ${temp}.`;
  } catch (e) {
    return `No se pudo determinar el clima de ${direccion}`;
  }
};

getInfo(argv.direccion).then(console.log).catch(console.log);
