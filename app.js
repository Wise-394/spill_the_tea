import express from "express";
import path from "node:path";
import session from "express-session";
import passportSetup from "./src/configs/passportConfig.js";
import { pool } from "./src/configs/databaseConfig.js";
import createTablesIfNotExists from "./src/model/InitDatabase.js";
import { indexRouter } from "./src/routes/indexRouter.js";
import { signupRouter } from "./src/routes/signupRouter.js";
import { loginRouter } from "./src/routes/loginRouter.js";
import { memberRouter } from "./src/routes/memberRouter.js";
import { messageRouter } from "./src/routes/messageRouter.js";
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
createTablesIfNotExists();

app.use("/", indexRouter);
app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/member", memberRouter);
app.use("/message", messageRouter);

//ERROR MIDDLEWARES
app.use((req, res) => {
  res.status(404).render("error", {
    errors: "Oops! The page you're looking for doesn't exist",
  });
});
app.use((err, req, res, _next) => {
  console.error(err);
  res.status(500).render("error", { errors: err });
});

app
  .listen(PORT, () => {
    console.log("Server is running at localhost:", PORT);
  })
  .on("error", (err) => {
    console.log(err);
  });
