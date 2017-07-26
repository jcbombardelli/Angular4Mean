const http = require('http');
const app = require('./config/express');
//var db = require('./config/database');

http.createServer(app).listen(process.env.PORT || 3000, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});


// const express = require('express');
// const path = require('path');
// const http = require('http');
// const bodyParser = require('body-parser');


// const app = express();
// // Parsers for POST data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));


// var pathClient = path.join(__dirname, '../client', 'dist');

// // Point static path to dist
// app.use(express.static(pathClient));

// app.get('*', (req, res) => {
//   res.sendFile(pathClient);
// });

// /**
//  * Get port from environment and store in Express.
//  */
// const port = process.env.PORT || '3000';
// app.set('port', port);

// /**
//  * Create HTTP server.
//  */
// const server = http.createServer(app);

// /**
//  * Listen on provided port, on all network interfaces.
//  */
// server.listen(port, () => console.log(`API running on localhost:${port}`));