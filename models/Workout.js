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
}, {
    toJSON:  {virtuals : true}
});

workoutSchema.virtual('totalDuration').get(function() {
    var total = 0;
    if(this.exercises.length > 0 ) {
         this.exercises.reduce((total, exerciseId) => {

            Exercise.findOne({_id: exerciseId}).then((exercise) => {
                console.log(exercise);
                return total + exercise.duration;

            }).catch(err => {
                console.log(err);
            })
            

        }) 
    } 
    return total;
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;