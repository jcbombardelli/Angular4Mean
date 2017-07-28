const http = require('http');
const app = require('./config/express');
//var db = require('./config/database');

http.createServer(app).listen(process.env.PORT || 3000, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});