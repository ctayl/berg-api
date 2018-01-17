
var orm = require('../config/orm');

var model = {

    all: function (table, callback) {

        orm.selectAll(table, function (data) {

            callback(data);
        });
    },

    new: function (table, col0, val0, callback) {

        orm.insertInto(table, col0, val0, function (data) {

            callback(data);
        });
    }
};

module.exports = model;