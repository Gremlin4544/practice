const express = require("express");
const router = express.Router();

const AuthRouter = require("../router/Auth.js");
// const DashboardRouter = require("../router/Dashboard.js");

router.use("/api/Auth", AuthRouter);
// router.use("/api/Dashboard", DashboardRouter);

// Global test endpoint
router.get("/", (req, res) => {
  res.send(`<h3>Qui Gon - its working! Its working!</h3>`);
});

module.exports = router;
