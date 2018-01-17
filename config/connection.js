var mysql = require('mysql');

var connection;

if (process.env.JAWS_DB) {

    connection = mysql.createConnection(process.env.JAWS_DB);

} else {

    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "2379",
        database: "berg_api_db"
    });
};

module.exports = connection;