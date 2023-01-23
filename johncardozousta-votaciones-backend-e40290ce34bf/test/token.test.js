const build = require("../src/app");
const { test, afterEach } = require("tap");
const mongoose = require("mongoose");

// crea el servidor
const app = build();

// Primer test revisa que el servidor regrese un codigo de estado 200
test("Ingreso a la app", async (t) => {
  // Crea la petición Http al servidor
  const res = await app.inject({
    method: "POST",
    payload: { usuario: "123", pass: "0000" },
    url: "/user/login",
  });
  t.equal(res.statusCode, 200, "returns a status code of 200");
  t.end();
});

afterEach(() => {
  mongoose.connection.close();
});
