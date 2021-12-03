const Router = require("express").Router();

let Exercise = require("../model/stuff.model");

Router.route("/").get((req, res) => {
  Exercise.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(404).json(err));
});
Router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  const newUser = new Exercise({ username, description, duration, date });
  newUser
    .save()
    .then(() => res.json({ addStatus: "success" }))
    .catch((err) => res.status(404).json(err));
});
Router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then((love) => res.json(love))
    .catch((err) => res.status(404).json(err));
});

Router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("deleted succcess"))
    .catch((err) => res.status(400).json("errr" + err));
});
Router.route("/update/:id").post((req, res) => {
  Exercise.findById(req.params.id)
    .then((ex) => {
      (ex.username = req.body.username),
        (ex.description = req.body.description),
        (ex.duration = Number(req.body.duration)),
        (ex.date = Date.parse(req.body.date));
      ex.save()
        .then(() => {
          res.json("upddated ");
        })
        .catch((err) => res.status(400).json(err));
    })
    .catch((err) => res.status(400).json("err" + err));
});
module.exports = Router;