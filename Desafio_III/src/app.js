import express from "express";
// servidor express

const users = [{}];

const app = express();

app.get("/inicio", (req, res) => {
  res.send("ESTE ES EL INICIO");
});

app.get("/products/:pid", (req, res) => {
  res.send(`el produvto es ${req.params.pid}`);
});

app.get("/usuariob-busqueda", (req, res) => {
  const queryParams = req.query;
  res.send(queryParams);
});

app.get("/usuario/:id", (req, res) => {
  const genero = req.query.genero;
  if (!genero || (genero !== "M" && genero !== "F")) return res.send({ users });

  const filterdUser = users.filter((user) => user.genero === genero);
  res.send({ usuarios: filterdUser });
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
