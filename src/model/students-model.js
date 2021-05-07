let mongoose = require("mongoose");

let studentSchema = mongoose.Schema({
    firstName: { type: String, requiered: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    birthDate: { type: String, required: false },
    nationallity: { type: String, required: true },
    nationanumber: { type: String, required: false },
    mark: { type: Object, required: false },
    // attemptNumber: { type: Number}
})
module.exports = mongoose.model("Studens", studentSchema)