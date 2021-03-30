const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const { projects } = require("./data.json");
const port = process.env.PORT || 3000;

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware to serve static files
app.use("/static", express.static(path.join(__dirname, "public")));

// Index route
app.get("/", (req, res, next) => {
  res.render("index", { projects });
});

// About route
app.get("/about", (req, res, next) => {
  res.render("about");
});

// Specific project route
app.get("/projects/:id", (req, res, next) => {
  const project = projects.find((project) => project.id == req.params.id);
  res.render("project", { project });
});

// 404 handler
app.use((req, res, next) => {
  const err = new Error("Page Not Found");
  err.status = 404;
  next(err);
});

// Custom error handler
app.use((err, req, res, next) => {
  if (!err.status) err.status = 500;
  if (!err.message) err.message = "Something went wrong!";
  res.status(err.status).render("error", { err });
});

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`);
});
