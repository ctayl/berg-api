var connection = require('./connection');

var orm = {

    selectAll: function (table, callback) {

        let query = "SELECT * FROM test";

        connection.query(query, function  (err, data) {
            if (err) throw err;
            callback(data);
        });
    },

    insertInto(table, col0, val0, callback) {

        let query = "INSERT INTO ?? (??) values (?)";

        connection.query(query, [table, col0, val0], function (err, data) {
           if (err) throw err;
            callback(data);
        });
    }
};

module.exports = orm;