const build = require("../src/app");
const { test, afterEach } = require("tap");
const mongoose = require("mongoose");

// crea el servidor
const app = build();

// token de ejemplo para los test
var token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjEsImlhdCI6MTY0ODY4NzYyMH0.FzgB-E4eBq1SOO92q5yNqRuE61a6hplUpzcKtDL8jbs";

test("Obtener los tipos de votaciones", async (t) => {
  //   crea la petición http al server
  const res = await app.inject({
    method: "GET",
    url: "/consulta/programa/ingeniería de Telecomunicaciones",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  //verifica que el token de ejemplo funcione
  console.log(res.body);
  t.equal(res.statusCode, 200, "return a status code of 200");
  t.end();
});

afterEach(() => {
  mongoose.connection.close();
});
