const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

//create a new post and assciates it to a new user
router.post("/", withAuth, (req, res) => {
  try {
    const body = req.body;
    console.log(req.session.userId);
    Post.create({ ...body, userId: req.session.userId }).then((newPost) => {
      res.json(newPost);
    });
  } catch (error) {
    res.status(500).json(err);
  }
});

// updates an existing post
router.put("/:id", withAuth, (req, res) => {
  try {
    console.log(req.body, req.params.id);
    Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (rows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (error) {
    res.status(500).json(err);
  }
});

//delete a post
router.delete("/:id", withAuth, async (req, res) => {
  try {
    console.log(req.body, req.params.id);
    const rows = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (rows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
