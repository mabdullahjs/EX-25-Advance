import Like from '../models/like.models.js';
import Post from '../models/post.models.js';

// Like a post
const likePost = async (req, res) => {
  const { postId } = req.body;

  try {
    const existingLike = await Like.findOne({ user: req.userId, post: postId });
    if (existingLike) {
      return res.status(400).json({ message: 'You have already liked this post' });
    }

    const like = await Like.create({ user: req.userId, post: postId });

    const post = await Post.findByIdAndUpdate(
      postId,
      { $push: { likes: req.userId } },
      { new: true } 
    );

    res.status(201).json(like);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export {likePost}