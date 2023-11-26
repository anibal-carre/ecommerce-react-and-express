const express = require("express");
const usersDb = require("./db/db");

const app = express();
app.use(express.json());

// USERS LIST
app.get("/api/users", (req, res) => {
  res.json(usersDb);
});

// RETURN UNIQUE USER
app.get("/api/users/:user", (req, res) => {
  const userFound = usersDb.find((user) => user.id == req.params.user);

  if (!userFound) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json(userFound);
});

// CREATE A NEW USER
app.post("/api/register", (req, res) => {
  const newUser = { id: usersDb.length + 1, ...req.body };
  usersDb.push(newUser);
  res.json(newUser);
});

app.listen(3000);
console.log(`Server on port ${3000}`);
