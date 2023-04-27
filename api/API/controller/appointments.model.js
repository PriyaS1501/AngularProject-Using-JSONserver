const mongoose = require("mongoose")
const Appointment = require("../model/appointments")


// R from CRUD[GET]
exports.getAppointment = async (req, res) => {
    try {
        const appointments = await Appointment.find()
        res.status(200).json({
            msg: "All Data fetched successfully",
            data: appointments
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

// R from CRUD[GET appointment by id]
exports.getAppointmentById = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.appointmentId);
        let m = ""
        if (appointment === null) {
            m = "No matching id of appointment found"
        } else {
            m = "Requested data fetched successfully"
        }

        res.status(200).json({
            msg: m,
            data: appointment
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

// D from CRUD[DELETE]
exports.deleteAppointment = async (req, res) => {
    try {
        const data = await Appointment.findByIdAndDelete(req.params.apppointmentId);
        res.status(200).json({
            msg: "Data deleted successfully",
            appointment: data
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