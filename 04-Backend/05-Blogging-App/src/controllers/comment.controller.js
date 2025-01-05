import Comment from '../models/comment.models.js';
import Post from '../models/post.models.js';

// Comment on a post
export const commentOnPost = async (req, res) => {
  const { postId, text } = req.body;

  try {
    const comment = await Comment.create({
      user: req.userId,
      post: postId,
      text,
    });
    
    const post = await Post.findByIdAndUpdate(
      postId,
      { $push: { comments: comment._id } },
    );

    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};