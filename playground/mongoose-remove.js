const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// })

User.findByIdAndRemove('5bc10de834accd72cf40e5a6').then((doc)=>{
  console.log(doc);
})
