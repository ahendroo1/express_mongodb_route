var data_route = require('express').Router();
var bodyParser = require('body-parser');
var cors = require('cors');
var MongoDB = require('mongodb').MongoClient;
var url = "mongodb://toko:1234@localhost:27017/toko" ;

data_route.use(bodyParser.json());
data_route.use(cors());

data_route.post('/api/karyawan', (req, res) => {
    MongoDB.connect(url, function(err, db) {
        var collection = db.collection('karyawan');
        collection.find({nama:req.body.nama}).toArray((error, res_data)=> {
            console.log(res_data)
            res.send(res_data)
        })
    })
}) 

module.exports = data_route