const mongoose = require("mongoose")
const Schema = mongoose.Schema

const doctorSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: { type: String, require: true },
    qualification: { type: String, require: true },
    speciality: { type: String, require: true },
    experience: { type: Number, require: true },
    about: { type: String, require: true },
    email: { type: String, require: true },
    contact: { type: Number, require: true },
    centre: { type: String, require: true },
    OPDtimeAM: { type: Number, require: true },
    OPDtimePM: { type: Number, require: true },
    OPDdays: { type: String, require: true },
    gender: { type: String, require: true }

   
})

module.exports = mongoose.model("Doctor", doctorSchema)