var path = require('path');

module.exports = function(app){
    
    app.all("/", function(req,res){
        res.sendFile(path.join(app.get('pathClientDist'), 'index.html'));
    });

    require('./routes/api/v1/sample')(app);
};