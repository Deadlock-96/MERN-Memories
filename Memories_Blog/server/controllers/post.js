import PostMessage from '../models/postMessage.js';

export const getPosts = async (req,res) => {
    try {
        const postMessage = await  PostMessage.find();
        res.status(200).json(postMessage);
    } catch (error) {
        res.status(404).josn({
            message: error.message
        });
    }
};

export const createPosts = async (req,res) => {
    const posts = req.body;
    const newPosts = new PostMessage(posts);
    try {
        await newPosts.save();
        res.status(201).json(newPosts);
    } catch (error) {
        res.status(409).josn({
            message: error.message
        });
    }
};

