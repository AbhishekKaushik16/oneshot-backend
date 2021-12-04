const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    year_of_batch: {
        type: String,
        required: true,
    },
    college_id: {
        type: String,
        required: true,
    },
    skills: {
        type: Array,
        required: true,
    }
});

module.exports = mongoose.model('Students', StudentSchema);