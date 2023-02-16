import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => { 
    try {  
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages, { message: 'Leyendo un post desde back-end...' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPostMessage = new PostMessage(post);

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage, { message: 'Post creado exitosamente desde back-end...' });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    //Validacion de existencia del post mediante el id con base de datos
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No se encuentra ningun post con ese ID...');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id}, { new: true });

    res.json(updatedPost, { message: 'Post actualizado exitosamente desde back-end...' });
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    //Validacion de existencia del post mediante el id con base de datos
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No se encuentra ningun post con ese ID...');

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: 'Post eliminado exitosamente desde back-end...' });
}