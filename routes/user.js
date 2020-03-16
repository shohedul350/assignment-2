const express = require('express');

const router = express.Router();


// Post
//  api/user/post
router.get('/get', (req, res, next) => {
  try {
    user.find();
  } catch (error) {
    next(error);
  }
});

// Get single post
//  api/user/Get
router.get('/get/:id', (req, res) => {

  res.status(200).json({ message: 'Get User Data' });
});

// Get All post
//  api/user/getAll
router.get('/getall/', (req, res) => {
  res.status(200).json({ message: 'Get All User Data' });
});

// delete
//  api/user/delete
router.delete('/delete/:id', (req, res) => {
  res.status(200).json({ message: `Delete Successfully ${req.params.id}` });
});

module.exports = router;
