const express = require("express");
const Contestant = require("../../model/contestant");
const ObjectId = require("mongodb").ObjectID;
const routes = express();

routes.get("/get-contestant", (req, res) => {
    Contestant.find({ status: true })
        .then((user) => {
            console.log(user);
            res.send(user);
        })
        .catch((err) => console.log(err));
});

routes.get("/get-winners", (req, res) => {
    Contestant.find({ status: false })
        .sort({ updatedAt: 1 })
        .then((user) => {
            console.log(user);
            res.send(user);
        })
        .catch((err) => console.log(err));
});

routes.get("/get-contestant/:id", (req, res) => {
    const id = req.params.id;
    Contestant.findOne({ _id: ObjectId(id) })
        .then((user) => {
            res.send(user);
        })
        .catch((err) => console.log(err));
});

module.exports = routes;
