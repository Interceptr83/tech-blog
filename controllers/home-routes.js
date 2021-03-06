const router = require("express").Router();

router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/blogs");
    return;
  }
  res.redirect("/login");
});

module.exports = router;