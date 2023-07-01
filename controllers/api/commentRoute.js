const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//Creating a new comment
router.post("/", async (req, res) => {
  try {
    console.log(req.session.user_Id);
    console.log(req.body);
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_Id,
    });
    res.status(200).json(newComment);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
