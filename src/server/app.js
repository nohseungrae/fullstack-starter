var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();
var BUILD_PATH = path.join(__dirname, "../../", "build");

app.use(express.static(BUILD_PATH));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.get("/*", (req, res, next) => {
  res.sendFile(path.join(BUILD_PATH, "index.html"));
});

module.exports = app;
