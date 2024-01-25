const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());
// Connect to the database
mongoose.connect(`${process.env.mongo_url}/BusinessCard`);

const userSchema = new mongoose.Schema({
    name: String,
    linkedin: String,
    github: String,
    twitter: String,
    description: String,
    interests: [String],
  });

const UserModel = mongoose.model('User', userSchema);

app.get('/users', async (req, res) => {
    try {
      const users = await UserModel.find();
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
app.post('/user', async (req, res) => {
    const { name, linkedin, github, twitter, description, interests } = req.body;
    try {
        const newUser = new UserModel({
        name,
        linkedin,
        github,
        twitter,
        description,
        interests,
        });
    await newUser.save();
    res.status(201).send('User created successfully');
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
