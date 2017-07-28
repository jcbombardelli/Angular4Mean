var api = require('../../../../api/sample.js');

module.exports = function (app) {

    console.log('bbbb');
    // app.route('/api/v1/event')
    //     .get(api.works);


    app.get('/api/v1/sample', function () {
        console.log('aaaaa');
        res.end("test");
    });
};