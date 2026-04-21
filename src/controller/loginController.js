import passport from "passport";

export const loginController = {
  renderLogin: (req, res) => {
    res.render("login");
  },
  loginUser: (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) return next(err);
      if (!user) {
        return res.render("login", { error: info.message });
      }
      if (user) {
        req.logIn(user, (err) => {
          if (err) return next(err);
          return res.redirect("/");
        });
      }
    })(req, res, next);
  },
};
