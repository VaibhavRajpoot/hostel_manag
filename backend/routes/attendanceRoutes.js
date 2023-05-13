const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { markAttendance, getAttendance, updateAttendance } = require('../controllers/attendanceController');

// @route   POST api/attendance/mark
// @desc    Mark attendance
// @access  Public
router.post('/mark', [
    check('student', 'Student is required').not().isEmpty(),
    check('status', 'Status is required').not().isEmpty()
], markAttendance);

// @route   GET api/attendance/get
// @desc    Get attendance
// @access  Public
router.post('/get', [
    check('student', 'Student is required').not().isEmpty()
], getAttendance);

// @route   PUT api/attendance/update
// @desc    Update attendance
// @access  Public
router.put('/update', [
    check('student', 'Student is required').not().isEmpty(),
    check('status', 'Status is required').not().isEmpty()
], updateAttendance);

module.exports = router;