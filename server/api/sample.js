var api = {}

api.works = function(req, res){
    console.log('Api Funcionando');
    res.send('Api Works');
};


module.exports = api;