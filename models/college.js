const mongoose = require('mongoose');

const CollegeSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    year_founded: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true
    },
    no_of_students: {
        type: Number,
        required: true,
    },
    courses: {
        type: Array,
        required: true,
    }
});

module.exports = mongoose.model('Colleges', CollegeSchema);