const express = require('express')
const { json } = require('body-parser')
const mongoose = require('mongoose')
// const auth = require('./auth.js')

const app = express()

app.use(json())

mongoose.Promise = Promise

const userSchema = {
    name: String
    // likes: [String]
}

const User = mongoose.model('User', userSchema)

const PORT = process.env.PORT || 3000
const MONGODB_URL = process.env.MONGODB_URL || `mongodb://localhost:27017/whim`

app.get('/', (req, res, next) => {
    console.log('anything')
    User
    .find()
    .then((users) => {
        res.json(users)
    })
})

mongoose.connect(MONGODB_URL)
  .then(() => {
    app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} breh`);
    })
  })
  .catch(console.error)