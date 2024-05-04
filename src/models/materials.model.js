const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    type: {
        required: true,
        type: String
    },
    class: {
        required: true,
        type: String
    },
    links: {
        required: true,
        type: [String]
    }
})

module.exports = mongoose.model('Materials', dataSchema)