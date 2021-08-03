require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors"); // cors require
const cookieSession = require("cookie-session");

const app = express();

app.use(cors()); // CORS middleware useage
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//Use cookie-parser
app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
  })
);

// DB connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db");
const db = new Pool(dbParams);
db.connect();

// Routes and passing the db connection

const usersRouter = require("./routes/users");
const providersRouter = require("./routes/providers");
app.use("/api/providers", providersRouter(db));

app.use("/api/users", usersRouter(db));

// User requests routes and offers for all requests made by user
const requestsRouter = require("./routes/requests");
app.use(`/api/client`, requestsRouter(db));

module.exports = app;
