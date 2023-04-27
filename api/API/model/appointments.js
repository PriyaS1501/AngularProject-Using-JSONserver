const mongoose = require("mongoose")
const Schema = mongoose.Schema

const appointmentSchema = Schema({
    _id: Schema.Types.ObjectId,
    fname: { type: String, require: true },
    emailid: { type: String, require: true },
    acontact: { type: Number, require: true },
    doa: { type: Date, require: true },
    gender: { type: String, require: true },
    preferredcentre: { type: String, require: true },
    contactway: { type: String, require: true },
    comment: { type: String, require: true }
   
   
})

module.exports = mongoose.model("Appointment", appointmentSchema)