const axios = require("axios");

const votacionesEstudiante = async () => {
  const votaciones = await axios.get(`http://localhost:3001/user/votaciones`);
  console.log(votaciones.data);
  return votaciones.data;
};

module.exports = {
  votacionesEstudiante,
};
