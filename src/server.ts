import express from "express";

const app = express();
const port = 3000;
app.use(express.json());

// Tipos de parâmetros
// -------------------
// Query Params
// Route Params :
// Request Body

app.get("/users", (request, response) => {
  const query = request.query;

  console.log(query);

  return response.json({
    users: [
      {
        id: "01",
        name: "josé deivid",
        email: "deivid@only.com",
      },
      {
        id: "02",
        name: "luís oliviera",
        email: "luisd@only.com",
      },
    ],
  });
});

app.post("/users", (request, response) => {
  const body = request.body;

  console.log(body);
  return response.json([{ message: "Created" }]);
});

app.put("/users:id", (request, response) => {
  const params = request.params;

  console.log(params);

  return response.json([{ message: "Updated" }]);
});

app.delete("/users", (request, response) => {
  return response.json([{ message: "Deleted" }]);
});

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});
