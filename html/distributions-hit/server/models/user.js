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
        },
        choicePicked1: {
            type: String,
            required: true,
            trim: true
        },
        choiceNotPicked1: {
            type: String,
            required: true,
            trim: true
        },
        choicePicked2: {
            type: String,
            required: true,
            trim: true
        },
        choiceNotPicked2: {
            type: String,
            required: true,
            trim: true
        },
        choicePicked3: {
            type: String,
            required: true,
            trim: true
        },
        choiceNotPicked3: {
            type: String,
            required: true,
            trim: true
        },
        choicePicked4: {
            type: String,
            required: true,
            trim: true
        },
        choiceNotPicked4: {
            type: String,
            required: true,
            trim: true
        },
        choicePicked5: {
            type: String,
            required: true,
            trim: true
        },
        choiceNotPicked5: {
            type: String,
            required: true,
            trim: true
        },
        choicePicked6: {
            type: String,
            required: true,
            trim: true
        },
        choiceNotPicked6: {
            type: String,
            required: true,
            trim: true
        },
        choicePicked7: {
            type: String,
            required: true,
            trim: true
        },
        choiceNotPicked7: {
            type: String,
            required: true,
            trim: true
        },
        choicePicked8: {
            type: String,
            required: true,
            trim: true
        },
        choiceNotPicked8: {
            type: String,
            required: true,
            trim: true
        },
        choicePicked9: {
            type: String,
            required: true,
            trim: true
        },
        choiceNotPicked9: {
            type: String,
            required: true,
            trim: true
        },
        choicePicked10: {
            type: String,
            required: true,
            trim: true
        },
        choiceNotPicked10: {
            type: String,
            required: true,
            trim: true
        },
        considerations: {
            type: String,
            required: true,
            trim: true
        },
        choice_affect: {
            type: String,
            required: true,
            trim: true
        },
        average_ratings: {
            type: String,
            required: true,
            trim: true
        },
        useful_information: {
            type: String,
            required: true,
            trim: true
        },
        technical_issues: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
);



const User = mongoose.model('User', userSchema);

module.exports = User;