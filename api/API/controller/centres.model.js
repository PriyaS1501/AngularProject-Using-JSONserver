const mongoose = require("mongoose")
const Centre = require("../model/centres")


// C from CRUD[POST]
exports.createCentre = async (req, res) => {
    try {

        // create a centre object
        const centre = new Centre({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            description: req.body.description,
            address: req.body.address,
            cemail: req.body.cemail,
            ccontact: req.body.ccontact
        })
        const centreData = await centre.save()
        res.status(200).json({
            msg: "Data has been added successfully",
            centre: centreData
        })

    }

    catch (err) {
        res.status(200).json({
            code: 10,
            msg: "Something went wrong",
            err: err
        })
    }
}

// R from CRUD[GET]
exports.getCentres = async (req, res) => {
    try {
        const centres = await Centre.find()
        res.status(200).json({
            msg: "All Data fetched successfully",
            data: centres
        })

    }

    catch (err) {
        res.status(501).json({
            code: 10,
            msg: "Something went wrong",
            err: err
        })
    }
}

// R from CRUD[GET centre by id]
exports.getCentreById = async (req, res) => {
    try {
        const centre = await Centre.findById(req.params.centreId);
        let m = ""
        if (centre === null) {
            m = "No matching id of centre found"
        } else {
            m = "Requested data fetched successfully"
        }

        res.status(200).json({
            msg: m,
            data: centre
        })

    }

    catch (err) {
        res.status(501).json({
            code: 10,
            msg: "Something went wrong",
            err: err
        })
    }
}

// U from CRUD[PUT]
exports.updateCentre = async (req, res) => {
    try {
        const data = await Centre.findByIdAndUpdate(req.params.centreId, req.body);
        res.status(200).json({
            msg: "Data has been updated successfully",
            centre: data
        })

    }

    catch (err) {
        res.status(200).json({
            code: 10,
            msg: "Something went wrong",
            err: err
        })
    }
}

// D from CRUD[DELETE]
exports.deleteCentre = async (req, res) => {
    try {
        const data = await Centre.findByIdAndDelete(req.params.centreId);
        res.status(200).json({
            msg: "Data deleted successfully",
            centre: data
        })

    }

    catch (err) {
        res.status(200).json({
            code: 10,
            msg: "Something went wrong",
            err: err
        })
    }
}