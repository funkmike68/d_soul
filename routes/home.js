const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", { pageTitle: "Welcome To Dominican Soul" });
});

module.exports = router;
