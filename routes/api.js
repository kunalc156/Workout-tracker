const router = require("express").Router();
const {Exercise, Workout} = require("../models");

///api/workouts/range

router.post("/api/workouts", async ({ body }, res) => {
  try{
      const newWorkout = await Workout.create({ body });
      res.status(200).json(newWorkout);
  } catch(err) {
      json.status(500).json(err);
  }  
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put("/api/workouts/:id", async ( req ,res) => {
    try {
      const exercise = await Exercise.create(req.body);
      const workout = await Workout.findOneAndUpdate({_id: req.params.id}, { $push: { exercises: exercise._id } }, { new: true },(err, doc) => {
        if (err) {
          res.status(500).json(err);
        }
      });
      res.json(workout);
    } catch (err) {
      res.status(500).json(err);

    }

   /*Exercise.create(req.body)
    .then(({_id }) => { 
        return Workout.findOneAndUpdate({_id: req.params.id}, { $push: { exercises: _id } }, { new: true },(err, doc) => {
        if (err) {
          res.status(500).json(err);
        }})
      })
    .then(workout => {
    })
    .catch(err => {
    }); */
  
}); 

router.get("/api/workouts/range", async (req, res) => {
  try{
      const workoutRange = await Workout.find({}).populate('exercises');
      console.log(workoutRange);
      res.status(200).json(workoutRange);

  } catch(err){
    console.log(err)
      res.status(500).json(err);
  }
});

module.exports = router; 