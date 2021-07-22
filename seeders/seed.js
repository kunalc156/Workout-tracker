const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});


const exerciseSeed = [
  {
    _id:  '60ef099f0b2e597327c247d2',
    type: 'resistance',
    name: 'Bench Press',
    duration: 20,
    weight: 300,
    reps: 10,
    sets: 4,
  },
  {
    _id: '60ef099f0b2e597327c247f4',
    type: 'resistance',
    name: 'Dumble Press',
    duration: 20,
    weight: 285,
    reps: 10,
    sets: 4,
  },
  {
    _id: '60ef099f0b2e597327c24555',
    type: 'cardio',
    name: 'Tread mill',
    distance: 10,
    duration: 40,
  },
]
const workoutSeed = [
  {
    day: new Date(new Date().setDate(new Date().getDate() - 9)),
    
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 8)),
   
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 7)),
    
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 6)),
   
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 5)),
    exercises: [
      '60ef099f0b2e597327c24555'
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 4)),
    exercises: [
      '60ef099f0b2e597327c247f4'
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 3)),
    exercises: [
      '60ef099f0b2e597327c247f4'
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 2)),
    exercises: [
      '60ef099f0b2e597327c247d2'
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 1)),
  
  },
];


db.Exercise.deleteMany({})
  .then(() => db.Exercise.collection.insertMany(exerciseSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

