const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const validateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        match: [/^[a-zA-Z0-9]+$/, 'username es invalido'],
        index: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ['F','M']
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        unique: true,
        validate: [validateEmail, 'Please ingrese un email valido']
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 34
    }
}, {timestamps: true});

module.exports = userModel