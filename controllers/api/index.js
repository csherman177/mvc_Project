const router = require("express").Router();
const commentRoute = require("./commentRoute");
const postRoute = require("./postRoute");
const userRoutes = require("./userRoutes");

router.use("/comments", commentRoute);
router.use("/posts", postRoute);
router.use("/users", userRoutes);

module.exports = router;
