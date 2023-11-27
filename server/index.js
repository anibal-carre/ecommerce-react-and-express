const express = require("express");
const morgan = require("morgan");
const usersDb = require("./db/db");

const app = express();
app.use(express.json());
app.use(morgan("dev"));

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

// LOGIN ROUTE

app.post("/api/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const foundUser = usersDb.find(
    (user) =>
      user.account.username == username && user.account.password == password
  );

  if (!foundUser) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  res.json({
    Status: "Login Successsfully",
    message: {
      Username: username,
      Password: password,
    },
  });
});

app.listen(3000);
console.log(`Server on port ${3000}`);
