const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();

const Post = require('../../models/Post');

router.get('/', (req, res) => {
    Post.find()
        .sort({date: -1 })
        .then(posts => res.json(posts));
});

router.post('/', (req, res) => {
    const newPost = new Post ({
        title: req.body.title,
        body: req.body.body,
    });
    newPost.save()
        .then(posts => res.json(posts));
});

router.delete('/:id', (req, res) => {
    Post.findById(req.params.id)
    .then(post => post.remove().then(() => res.json({success: true })))
    .catch(err => res.status(404).json({sucess: false}));
});

module.exports = router;