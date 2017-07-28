var MongoClient = require('mongodb').MongoClient;

var db = null;
var url = '';

MongoClient.connect(url, function (err, db) {
    if (err) { throw err; }
    console.log('Banco de dados conectado: ' + db.databaseName);
});

module.exports = db;