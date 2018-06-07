
const { MongoClient, ObjectId, } = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to mongodb Server");
    }
    console.log("Successfully connected to mongodb");

    // db.collection('Todos').find({
    //      _id: new ObjectId("5b19815055332182e8547f0e")
    //     }).toArray().then((docs)=> {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('unable to fetch doc', err);
    // });

    db.collection('Users').find({name: "Dishin Tejani"}).toArray().then((docs) => {
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch doc', err);
    });

    //db.close();
})