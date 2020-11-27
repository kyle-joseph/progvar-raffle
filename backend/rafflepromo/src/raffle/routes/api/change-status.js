const express = require("express");
const Contestant = require("../../model/contestant");
const ObjectId = require("mongodb").ObjectID;
const routes = express();

routes.put("/update-status-contestant/:id", (req, res) => {
    const id = req.params.id;
    Contestant.findOne({ _id: ObjectId(id) })
        .then((e) => {
            Contestant.updateOne({ _id: ObjectId(id) }, { status: !e.status })
                .then((updated) => res.send(updated))
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
});

module.exports = routes;
