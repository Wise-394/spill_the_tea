export const indexController = {
  renderIndex: (req, res) => {
    res.render("index", { user: req.user });
  },
};
