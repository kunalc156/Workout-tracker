const mongoose = require('mongoose');
const Exercise = require('./Exercise')
const Schema = mongoose.Schema;

const workoutSchema =  new Schema ({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [{
        type: Schema.Types.ObjectId,
        ref: "Exercise"
    }]
});



const Workout = mongoose.model("Workout", workoutSchema);
Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" } ,
      }
    },
 ])
module.exports = Workout;