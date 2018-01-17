var express = require('express');

var router = express.Router()

var model = require('../models/api.js');

router.get("/api/:table/all", function (req, res) {

    let table = req.params.table;

    model.all(table, function (data) {

        res.send(data);
    });
});

router.post("/api/:table/new/:col0/:val0", function (req, res) {

    let table = req.params.table;
    let col0 = req.params.col0;
    let val0 = req.params.val0;

    console.log(table, col0, val0);

    model.new(table, col0, val0, function (data) {

        res.send(data);
    });
});

module.exports = router;