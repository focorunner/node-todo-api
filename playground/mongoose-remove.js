const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// }).catch((e) => {
//   console.log(e);
// });

// Todo.findOneAndRemove({}).then((todo) => {
//   console.log(todo);
// }).catch((e) => {
//   console.log(e);
// });

var id = '5a67a12fa1dc1927282bf588';

Todo.findByIdAndRemove(id).then((todo) => {
  console.log(todo);
}).catch((e) => {
  consoel.log(e);
})
