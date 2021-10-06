const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 3
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    phone: {
        type: String,
        trim: true,
        minLength: 10
    },
    age: {
        type: Number,
        trim: true
    },
    gender: {
        type: String,
        trim: true
    },
    // photo: {
    //     type: String,
    //     trim: true
    // },
    address: {
        type: String,
        trim: true
    }

},{
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;