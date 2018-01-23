const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a67854b107db84524678277e';

// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// }).catch((e) => console.log('error'));

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// }).catch((e) => console.log('error'));

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo', todo);
// }).catch((e) => console.log(e));

var id = '6a6788efa1dc1927282bf587';

User.findById(id).then((user) => {
    if(!user) {
      return console.log('ID not found');
    }
    console.log(user);
  }, (e) => console.log(e));
