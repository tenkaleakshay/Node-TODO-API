const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5bbfbc3eb4127c26386e8908';



id = '5bc0c890f2fab955a8f50d1e';
Todo.findById(id).then((doc) =>
{
  if(!doc){
    return console.log('Id not found');
  }
  console.log('text by ID', doc);
}).catch((e) => console.log(e));



id = '5bbfbc3eb4127c26386e8908';
User.findOne({
  _id : id
}).then((doc) =>
{
  if(!doc){
    return console.log('Id not found');
  }
  console.log('User by ID', doc);
}).catch((e) => console.log(e));
