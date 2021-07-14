const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const exerciseSchema = new Schema({
    name : {
        type: String,
        trim: true,
        required:"Enter a name for exercise"
    },
    type :{
        type: String,
        trim: true,
    },
    weight: {
        type: Number,
    },
    sets: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    duration: {
        type: Number,
    },
})

const Exercise = mongoose.models.Exercise || mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;