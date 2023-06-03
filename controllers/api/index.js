const router = require("express").Router();
const commentRoutes = require("./comment-route");
const postRoutes = require("./post.route");
const userRoutes = require("./userRoutes");

router.use("./comments", commentRoutes);
router.use("./posts", postRoutes);
router.use("./users", userRoutes);

module.exports = router;
