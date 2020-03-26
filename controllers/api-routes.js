var db = require("../models");
// const app = require("express").Router();
// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the excercises
  app.get("/api/workouts", (req, res) => {
    db.Workout.find()
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // POST route for saving a new excercise
  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      req.params.id,
      {
        $push: { exercises: req.body }
      },
      {
        runValidator: true,
        new: true
      }
    )
      .then(results => res.json(results))
      .catch(err => {
        if (err) throw err;
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .limit(7)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // app.get("/api/users/all", (req, res) => {
  //   db.User.find()
  //     .then(results => {
  //       res.json({ data: results });
  //     })
  //     .catch(err => {
  //       res.json({ error: err });
  //     });
  // });

  // Espress POST route delivers the response and request object in a callback
  // app.post("/api/users/new", (req, res) => {
  //   // Mongoose delivers its results in a promise which gives us the ability to handle errors with .catch
  //   db.User.create(req.body)
  //     .then(result => {
  //       res.json({ data: result });
  //     })
  //     .catch(err => {
  //       res.json({ error: err });
  //     });
  // });
};
