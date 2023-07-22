const router = require("express").Router();
const { Post, User } = require("../../models");
const withAuth = require("../../utils/auth");

//create a new post and assciates it to a new user
//console.log(req.session.userId);
// router.post("/", async (req, res) => {
//   try {
//     Post.create({ ...req.body, user_id: req.session.user_Id.id }).then(
//       (newPost) => {
//         res.json(newPost);
//       }
//     );
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

router.post("/", withAuth, (req, res) => {
  try {
    // console.log(req.body);
    // // Ensure that req.session.user_Id.id holds the correct user ID
    // if (!req.session.user_Id || !req.session.user_Id.id) {
    //   return res
    //     .status(403)
    //     .json({ message: "You must be logged in to create a post." });
    // }

    // // Create the new post with the correct user_id value
    // const newPost = await Post.create({
    //   ...req.body,
    //   user_id: req.session.user_Id, // Assuming this holds the correct user ID
    // });

    // res.json(newPost);
    const body = req.body;
    console.log(req.session.userId);
    Post.create({ ...body, user_id: req.session.user_Id }).then((newPost) => {
      res.json(newPost);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete a post
router.delete("/:id", withAuth, async (req, res) => {
  console.log("DELETE POST ROUTE");
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

//update post
router.put("/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, content } = req.body;

    // Update the blog post by ID
    const updatedPost = await Post.update(
      { title, content },
      {
        where: {
          id: postId,
          // Optionally, you can add a condition to check user_id if needed
          // user_id: req.session.userId,
        },
      }
    );

    if (updatedPost[0] === 1) {
      // The first element of the updatedPost array will be 1 if the update was successful
      res.json({ message: "Post updated successfully." });
    } else {
      // If updatedPost[0] is not 1, it means no post was updated (post not found)
      res.status(404).json({ message: "Post not found." });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
