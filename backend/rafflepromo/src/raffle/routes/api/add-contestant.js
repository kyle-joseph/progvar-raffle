const express = require("express");
const Contestant = require("../../model/contestant");
const routes = express();

routes.post("/add-contestant", async (req, res) => {
    const { name, contactnum } = req.body;

    if (!name || !contactnum) {
        return res.status(404).send("Empty Fields");
    }

    if (contactnum.length != 11) {
        return res.status(404).send("Invalid Contact Number");
    }

    let countContestant = (await Contestant.find()).length;
    countContestant++;

    const newContestant = new Contestant({
        name,
        contactnum,
        rafflename: `Ticket # ${countContestant}`,
    });

    newContestant
        .save()
        .then((user) => {
            return res.status(200).send(user);
        })
        .catch((err) => console.log(err));
});

module.exports = routes;
