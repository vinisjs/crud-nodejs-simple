import express from "express";

const app = express();
const port = 3000;

// HTTP -> GET POST PUT DELETE

app.get("/users", (request, response) => {
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

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});
