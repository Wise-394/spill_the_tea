import { enableMemberOnUserById } from "../model/userQueries.js";

export const activateMemberOfUser = async (req, res) => {
  const inputPassword = req.body.memberPassword;
  if (inputPassword !== process.env.MEMBER_PASSWORD) {
    return res.render("index", {
      user: req.user,
      memberError: "Incorrect Password",
    });
  }
  await enableMemberOnUserById(req.user.id);
  res.redirect("/");
};
