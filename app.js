const express = require("express");

const app = express();

const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
