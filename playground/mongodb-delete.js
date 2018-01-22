// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return consolg.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const myDB=db.db('TodoApp');

  // deleteMany
  // myDB.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete Todos ', err);
  // });

  // deleteOne
  // myDB.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete Todo ', err);
  // });

  // findOneAndDelete
  // myDB.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to find and delete Todo ', err);
  // });

  // delete all uers with name Mark Coleman
  // myDB.collection('Users').deleteMany({name: 'Mark Coleman'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete Users ', err);
  // });

  // delete one user by id, return user object
  // myDB.collection('Users').findOneAndDelete({_id: new ObjectID('5a665980d3aa782740427a48')}).then((result) => {
  //   console.log(JSON.stringify(result, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to delete user by ID ', err);
  // });

  // db.close();
});
