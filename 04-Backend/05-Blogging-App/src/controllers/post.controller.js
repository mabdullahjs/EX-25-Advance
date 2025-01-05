import Post from "../models/post.models.js"

const createPost = async (req, res) => {
    const { title, content } = req.body;
    try {
        const post = await Post.create({
            title,
            content,
            user: req.userId,
        });
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getPost = async (req, res) => {
    try {
        const posts = await Post.find()
            .populate('user' , 'username')
            .populate('likes', 'username')
            .populate({
                path: "comments",
                select: "text",
                populate: {
                    path: "user",
                    select: "username",
                },
            })
        res.json(posts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export { createPost, getPost }