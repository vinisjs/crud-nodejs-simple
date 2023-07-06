import express from "express";
import { v4 as uuid } from "uuid";

const app = express();
const port = 3000;
app.use(express.json());

interface User {
  id: string;
  name: string;
  email: string;
}

const users: User[] = [];

app.get("/users", (request, response) => {
  console.log("get");
  return response.status(200).json(users);
});

app.post("/users", (request, response) => {
  console.log("post");

  const { name, email } = request.body;

  const user: User = {
    id: uuid(),
    name: name,
    email: email,
  };

  users.push(user);

  return response.json(user);
});

app.put("/users/:id", (request, response) => {
  console.log("put");

  const { id } = request.params;
  const { name, email } = request.body;

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex < 0) {
    return response.sendStatus(404);
  }

  const user: User = { id, name, email };

  users[userIndex] = user;

  return response.sendStatus(200);
});

app.delete("/users/:id", (request, response) => {
  console.log("delete");
  const { id } = request.params;

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex < 0) {
    return response.sendStatus(404);
  }

  users.splice(userIndex, 1);
  return response.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
