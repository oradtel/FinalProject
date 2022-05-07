const mongoose = require('mongoose');

const experimentSchema = mongoose.Schema(
    {
        userID: {
            type: String,
            required: true,
            trim: true
        },
        choicePicked1: {
            type: String,
            required: true,
            trim: true
        },
        choiceNotPicked1: {
            type: Number,
            required: true,
            trim: true
        },
        choicePicked2: {
            type: String,
            required: true,
            trim: true
        },
        choiceNotPicked2: {
            type: Number,
            required: true,
            trim: true
        },
        choicePicked3: {
            type: String,
            required: true,
            trim: true
        },
        choiceNotPicked3: {
            type: Number,
            required: true,
            trim: true
        },
        choicePicked4: {
            type: String,
            required: true,
            trim: true
        },
        choiceNotPicked4: {
            type: Number,
            required: true,
            trim: true
        },
        choicePicked5: {
            type: String,
            required: true,
            trim: true
        },
        choiceNotPicked5: {
            type: Number,
            required: true,
            trim: true
        },
        choicePicked6: {
            type: String,
            required: true,
            trim: true
        },
        choiceNotPicked6: {
            type: Number,
            required: true,
            trim: true
        },
        choicePicked7: {
            type: String,
            required: true,
            trim: true
        },
        choiceNotPicked7: {
            type: Number,
            required: true,
            trim: true
        },
        choicePicked8: {
            type: String,
            required: true,
            trim: true
        },
        choiceNotPicked8: {
            type: Number,
            required: true,
            trim: true
        },
        choicePicked9: {
            type: String,
            required: true,
            trim: true
        },
        choiceNotPicked9: {
            type: Number,
            required: true,
            trim: true
        },
        choicePicked10: {
            type: String,
            required: true,
            trim: true
        },
        choiceNotPicked10: {
            type: Number,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

const expModel = mongoose.model('expModel', experimentSchema);

module.exports = expModel;