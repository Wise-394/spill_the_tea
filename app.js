import express from "express";
import path from "node:path";
import session from "express-session";
import passportSetup from "./src/configs/passportConfig.js";
import { pool } from "./src/configs/databaseConfig.js";
const app = express();
const PORT = 3000;
const passport = passportSetup(pool);

app.set("views", path.join(import.meta.dirname, "src/views"));
app.set("view engine", "ejs");
const assetsPath = path.join(import.meta.dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("success");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server is running at localhost:", PORT);
});
