const router = require("express").Router();
const { Post, User, Comment } = require("../models");

// get all posts for homepage
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        { model: User },
        { model: Comment, include: [{ model: User }] },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("all-posts", { posts, loggedIn: req.session.loggedIn });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// get single post
router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: Comment, include: [User] }, User],
    });
    if (!postData) {
      res.status(404).json({ message: "No posts found!" });
      return;
    }
    const post = postData.get({ plain: true });
    console.log(post);
    res.render("single-post", post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// handles the login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// handles the sign-up route
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

module.exports = router;
