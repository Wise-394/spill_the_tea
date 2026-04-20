import passport from "passport";
import { Strategy } from "passport-local";
import { userQueries } from "../model/userQueries.js";

export default function passportSetup() {
  passport.use(
    new Strategy(async (username, password, done) => {
      try {
        const user = await userQueries.getUser(username);

        if (!user) {
          return done(null, false, { message: "username does not exist" });
        }
        if (password !== user.password) {
          return done(null, false, { message: "incorect password" });
        }
        return done(null, user);
      } catch (err) {
        console.error("unable to setup passport, PassportConfig.js", err);
      }
    }),
  );

  return passport;
}
