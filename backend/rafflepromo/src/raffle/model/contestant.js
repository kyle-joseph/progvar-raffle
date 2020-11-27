const mongoose = require("mongoose");

const ContestantSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        contactnum: {
            type: String,
            require: true,
        },
        rafflename: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        status: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

const Contestant = mongoose.model("contestant", ContestantSchema);
module.exports = Contestant;
