var api = require('../../../../api/sample.js');

module.exports = function (router) {

    router.route('/api/v1/sample').get(api.works);
};