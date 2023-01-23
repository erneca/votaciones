async function login(req, res) {
  if (req.body.usuario == "123" && req.body.pass == "0000") {
    let token = await res.jwtSign({
      _id: 1,
      nombre: "Sergio",
      apellido: "Gonzalez",
      rol: { codigo: 01, nombre: "Estudiante" },
      seccional: { codigo: 01, nombre: "Bogotá" },
      division: { codigo: 01, nombre: "Ingenierías" },
      facultad: { codigo: 01, nombre: "ingeniería de Telecomunicaciones" },
      programa: {
        codigo: 01,
        nombre:
          "Especialización en Gestión de Servicios de Tecnologías de la Información",
      },
      semestre: 4,
      periodo: 20221,
    });
    res.status(200).send(token);
  } else if (req.body.usuario == "456" && req.body.pass == "0000") {
    let token = await res.jwtSign({
      _id: 1,
      nombre: "Luz Patricia",
      apellido: "Rocha Caicedo",
      rol: { codigo: 02, nombre: "Secretaria de división" },
      seccional: { codigo: 01, nombre: "Bogotá" },
      division: { codigo: 01, nombre: "Ingenierías" },
      periodo: 20221,
    });
    res.status(200).send(token);
  } else if (req.body.usuario == "789" && req.body.pass == "0000") {
    let token = await res.jwtSign({
      _id: 1,
      nombre: "German",
      apellido: "Macias Muñoz",
      rol: { codigo: 03, nombre: "Decano" },
      seccional: { codigo: 01, nombre: "Bogotá" },
      division: { codigo: 01, nombre: "Ingenierías" },
      facultad: { codigo: 01, nombre: "ingeniería de Telecomunicaciones" },
      periodo: 20221,
    });
    res.status(200).send(token);
  } else if (req.body.usuario == "123" && req.body.pass == "1111") {
    let token = await res.jwtSign({
      _id: 1,
      nombre: "Ingrid Lorena",
      apellido: "Campos Vargas",
      rol: { codigo: 04, nombre: "Secretaria general" },
      periodo: 20221,
    });
    res.status(200).send(token);
  }
  res.status(401).send("usuario o contraseña inválida");
}

module.exports = {
  login,
};
