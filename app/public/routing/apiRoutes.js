var db = require("../models");
// var Sequelize = require("sequelize");
// var Op = Sequelize.Op;
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        db.Friends.findAll({}).then(function (data) {
            res.json(data);
        })
    })

    app.post("/api/new", function (req, res) {

        db.Friends.create({
            name: req.body.name,
            photo: req.body.photo,
            scores: req.body.scores
        }).then(function (data) {
            res.json(data);
        })


    })
};

