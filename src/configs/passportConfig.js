import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";

export default function passportSetup(pool) {
  passport.use(new Strategy(async (username, password, done) => {}));

  return passport;
}
