const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoute = require("./home-routes")
const dash = require("./dash-routes")


router.use("/api", apiRoutes);
router.use("/", homeRoute);
router.use("/profile", dash);


module.exports = router;
