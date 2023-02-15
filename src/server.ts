import express from "express";

const app = express();

app.post("/courses", (request, response) => {
  const { name } = request.body;
  return response.json({
    name,
  });
});

app.listen(3333, () => console.log("Rodando!"));