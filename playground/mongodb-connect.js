const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
  if(err){
    console.log('Error in Connecting to database');
  }
  console.log('Connected to database');

db.collection('Todos').insertOne({

    test:'something to do',
    completed: false
  },(err,result) =>{
    if(err){
      return console.log('unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined, 2));
  });
  db.close();

});
