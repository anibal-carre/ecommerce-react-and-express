const express = require("express");
const morgan = require("morgan");
const usersDb = require("./db/dbUser");
const dbProduct = require("./db/dbProduct");
const multer = require("multer");
const path = require("path");
const productsDb = require("./db/dbProduct");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));
app.use(cors());

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

// --------------------- PRODUCTS ---------------------

// Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Directorio donde se guardarán las imágenes
  },
  filename: function (req, file, cb) {
    const fileName =
      file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

// Image Route
app.post("/api/product/image", upload.single("imagen"), (req, res) => {
  const imageUrl = `http://localhost:3000/uploads/${req.file.filename}`;
  res.json({ imageUrl });
});

app.get("/api/products", (req, res) => {
  console.log(productsDb.samsung);
  res.json(productsDb);
});

app.listen(3000);
console.log(`Server on port ${3000}`);
