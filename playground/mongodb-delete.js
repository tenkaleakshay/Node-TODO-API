//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
  if(err){
    console.log('Error in Connecting to database');
  }
  console.log('Connected to database');

db.collection('Todos').deleteMany({test:'done everything'}).then((result) =>{
    console.log(result);
});
  db.close();

});
