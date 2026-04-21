export const renderIndex = (req, res) => {
  res.render("index", { user: req.user });
};
