const mongoose = require("mongoose")
const Doctor = require("../model/doctors")


// C from CRUD[POST]
exports.createDoctor = async (req, res) => {
    try {

        // create a doctor object
        const doctor = new Doctor({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            qualification: req.body.qualification,
            speciality: req.body.speciality,
            experience: req.body.experience,
            about: req.body.about,
            email: req.body.email,
            contact: req.body.contact,
            centre: req.body.centre,
            OPDtimeAM: req.body.OPDtimeAM,
            OPDtimePM: req.body.OPDtimePM,
            OPDdays: req.body.OPDdays,
            gender: req.body.gender
        })
        const doctorData = await doctor.save()
        res.status(200).json({
            msg: "Data has been added successfully",
            doctor: doctorData
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
exports.getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find()
        res.status(200).json({
            msg: "All Data fetched successfully",
            data: doctors
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

// R from CRUD[GET doctor by id]
exports.getDoctorById = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.doctorId);
        let m = ""
        if (doctor === null) {
            m = "No matching id of doctor found"
        } else {
            m = "Requested data fetched successfully"
        }

        res.status(200).json({
            msg: m,
            data: doctor
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
exports.updateDoctor = async (req, res) => {
    try {
        const data = await Doctor.findByIdAndUpdate(req.params.doctorId, req.body);
        res.status(200).json({
            msg: "Data has been updated successfully",
            doctor: data
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
exports.deleteDoctor = async (req, res) => {
    try {
        const data = await Doctor.findByIdAndDelete(req.params.doctorId);
        res.status(200).json({
            msg: "Data deleted successfully",
            doctor: data
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