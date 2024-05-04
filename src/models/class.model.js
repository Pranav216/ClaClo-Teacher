const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    class: { required: true, type: String },
    section: { required: true, type: String },
    studentCount: { required: true, type: Number },
    teacherName: { required: true, type: String }
})

module.exports = mongoose.model('Class', dataSchema)