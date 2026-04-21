import passport from "passport";
import { Strategy } from "passport-local";
import { userQueries } from "../model/userQueries.js";
import bcrypt from "bcryptjs";

export default function passportSetup() {
  passport.use(
    new Strategy(async (username, password, done) => {
      try {
        const user = await userQueries.getUserByUsername(username);

        if (!user) {
          return done(null, false, { message: "username does not exist" });
        }
        const result = await bcrypt.compare(password, user.password);
        if (!result) {
          return done(null, false, { message: "incorrect password" });
        }
        return done(null, user);
      } catch (err) {
        console.error("unable to setup passport, PassportConfig.js", err);
        return done(err);
      }
    }),
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = userQueries.getUserById(id);
      done(null, user);
    } catch (err) {
      console.error("unable to deserializeUser, passportConfig.js", err);
      done(err);
    }
  });

  return passport;
}
