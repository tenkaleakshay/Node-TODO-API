//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
  if(err){
    console.log('Error in Connecting to database');
  }
  console.log('Connected to database');

db.collection('Todos').find({}).toArray().then((docs) =>{
  console.log(JSON.stringify(docs,undefined,1));
}, (err) =>{
  console.log('unable to fetchh data,err');
});
  db.close();

});
