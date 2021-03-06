const express = require('express')
const { json } = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const auth = require('./auth.js')

const app = express()

app.use(json())

mongoose.Promise = Promise

const userSchema = {
    name: String,
    password: String,
    likes: [mongoose.Schema.Types.ObjectId]
}

const postSchema = {
    author: String,
    permalink: String,
    title: String,
    thumbnail: String,
    url: String
}

const deleteSchema = {
    author: String,
    permalink: String,
    title: String,
    thumbnail: String,
    url: String
}

const User = mongoose.model('User', userSchema)
const Post = mongoose.model('Post', postSchema)
// const Delete = mongoose.model('Delete', deleteSchema)

const PORT = process.env.PORT || 3000
const MONGODB_URL = process.env.MONGODB_URL || `mongodb://${auth.username}:${auth.password}@ds137291.mlab.com:37291/whim`

//adding posts
app.post('/addPost', (req, res, next) => {
    let posts = req.body
    Post
    .create(posts)
    .then((data) => {
        res.json(data)
    })
})

//finding posts
app.get('/getUserLikes', (req, res, next) => {
    let posts = req.body
    Post
    .find()
    .then((info) => {
        res.json(info)
    })
})

// deletes all users
app.post(`/deleteUsersPost/:id`, (req, res, next) => {
    Post
    .remove({_id: req.params.id})
    .then((data) => {
        res.json(data)
        console.log(data)
    })
})

app.use('/', express.static(path.join(__dirname, '../client')))

mongoose.connect(MONGODB_URL)
  .then(() => {
    app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} breh`);
    })
  })
  .catch(console.error)