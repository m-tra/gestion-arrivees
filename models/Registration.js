const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
        trim: true,
    }
},
    { collection: 'users' });

module.exports = mongoose.model('Registration', registrationSchema);