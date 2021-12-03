const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const exercisesSchema = new Schema(
  {
    username: { type: "string", required: true },
    description: { type: "string", required: true },
    duration: { type: "number", required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);
const exercises = mongoose.model("Exercise", exercisesSchema);
module.exports = exercises;