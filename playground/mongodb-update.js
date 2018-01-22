// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return consolg.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const myDB=db.db('TodoApp');

  // myDB.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a6666e4bbe10416e0529cde')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to update Todo ', err);
  // });

  myDB.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a665bbd0c3cbc14f0dacc55')
  }, {
    $set: {name: 'Mark'},
    $inc: {age: 1}
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  }, (err) => {
    console.log('Unable to update User ', err);
  });


  // db.close();
});
