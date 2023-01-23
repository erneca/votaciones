// No editable ejecuta el servidor en modo Producción o Desarroll

const server = require("./app")();

server.listen(process.env.PORT, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
