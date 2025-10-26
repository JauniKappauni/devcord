const express = require("express");
const app = express();
const port = 3000;
const pool = require("./db");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  pool.query(
    "INSERT INTO users (email, username, password) VALUES (?, ?, ?)",
    [email, username, password],
    (err, res2) => {
      if (err) {
        res.send("❌");
      } else {
        res.send("✅");
      }
    }
  );
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const identifier = req.body.identifier;
  const password = req.body.password;
  pool.query(
    "SELECT email, username, password FROM users WHERE email = ? OR username = ?",
    [identifier, identifier],
    (err, res2) => {
      if (err) {
        res.send("❌");
      } else {
        if (res2[0].password == password) {
          res.send("✅");
        } else {
          res.send("❌");
        }
      }
    }
  );
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
