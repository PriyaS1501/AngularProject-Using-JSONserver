const express = require('express')
const router = express.Router()
const centreController = require('../controller/centres.model')

// handle POST request for centres
router.post('/', centreController.createCentre)

// handle GET request for centres
router.get('/', centreController.getCentres)

// handle GET request for single centre
router.get('/:centreId', centreController.getCentreById)

// Handle PUT request
router.put('/:centreId', centreController.updateCentre)

// Handle DELETE request
router.delete('/:centreId', centreController.deleteCentre)


module.exports = router