
var express = require('express');
var MongoDB = require('mongodb').MongoClient;
var url = "mongodb://toko:1234@localhost:27017/toko" ;
var bodyParser = require('body-parser');
var cors = require('cors')
var data_route = require('./route/data_route');
var app = express();

app.use(bodyParser.json());
app.use(data_route)
app.use(cors());


app.get('/',(req, res) => {
    res.send('Backend')
})


app.listen(3210, () => {
    console.log('Server active')
})

// MongoDB.connect(url, function(err, res_data) { 
//     console.log("Terhubung ke MongoDB!"); 
//     inputData(res_data, () => {
//         ambilData(res_data, () => {

//             res_data.close(); 
//         })
//     });
// }); 

//     var inputData = (MongoDB, callback) => {
//         var collection = MongoDB.collection('karyawan'); 
//         collection.insertMany(
//             [
//                 {nama: 'Budi', usia: 21, kota: 'Jakarta'}, 
//                 {nama: 'Caca', usia: 25, kota: 'Bandung'}, 
//                 {nama: 'Dedi', usia: 28, kota: 'Medan'}
//             ],
//         (err, result) => { 
//             console.log(result); 
//             callback(result);
//         });
//     }

//     var ambilData = (MongoDB) => {
//         var collection = MongoDB.collection('karyawan');
//         collection.find({}).toArray((error, ress)=> {
//             console.log(ress)
//         })
//     }
  
