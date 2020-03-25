const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    excercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Type is required"
        },
        name: {
          type: String,
          trim: true,
          required: "Please enter a name"
        },
        duration: {
          type: Number,
          required: "Please enter a duration"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

WorkoutSchema.virtual("totalDuration").get(function() {
  return this.excercises.reduce((total, excercise) => {
    return total + excercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
