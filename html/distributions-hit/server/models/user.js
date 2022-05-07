const mongoose = require('mongoose');

// define the structure of the data stored in the User collection
const userSchema = mongoose.Schema(
    {
        first_name: {
            type: String,
            required: true,
            trim: true
        },
        last_name: {
            type: String,
            required: true,
            trim: true
        },
        age: {
            type: Number,
            required: true,
            trim: true
        },
        gender: {
            type: String,
            required: true,
            trim: true
        },
        country: {
            type: String,
            required: true,
            trim: true
        },
        state: {
            type: String,
            trim: true
        },
        city: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true
    }
);



const User = mongoose.model('User', userSchema);

module.exports = User;