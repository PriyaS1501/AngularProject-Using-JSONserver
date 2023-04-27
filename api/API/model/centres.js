const mongoose = require("mongoose")
const Schema = mongoose.Schema

const centreSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: { type: String, require: true },
    description: { type: String, require: true },
    address: { type: String, require: true },
    cemail: { type: String, require: true },
    ccontact: { type: Number, require: true }
   
})

module.exports = mongoose.model("Centre", centreSchema)