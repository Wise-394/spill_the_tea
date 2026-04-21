import { enableMemberOnUserById } from "../model/userQueries.js";

export const activateMemberOfUser = async (req, res) => {
  const inputPassword = req.body.password;
  if (inputPassword !== process.env.MEMBER_PASSWORD) {
    return res.render("view", {
      user: req.user,
      memberError: "Incorrect Password",
    });
  }
  await enableMemberOnUserById(req.user.id);
  res.redirect("/");
};
