

// get all students data
// get one student (by id)
// post grade for each student
// read the user infro from the form and store it in database


const express = require('express');
const router = express.Router();
const studentControllers =require('../controllers/students-controllers');

router
  .get('/', studentControllers.getAllUsers)
  .get('/:id', studentControllers.getUserById)
 .post('/:id', studentControllers.postStudentInfo)
 .put('/:id',studentControllers.setUserMark )

module.exports = router;
