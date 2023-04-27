const express = require('express')
const router = express.Router()
const doctorController = require('../controller/doctors.model')

// handle POST request for doctors
router.post('/', doctorController.createDoctor)

// handle GET request for doctors
router.get('/', doctorController.getDoctors)

// handle GET request for single doctor
router.get('/:doctorId', doctorController.getDoctorById)

// Handle PUT request
router.put('/:doctorId', doctorController.updateDoctor)

// Handle DELETE request
router.delete('/:doctorId', doctorController.deleteDoctor)


module.exports = router