const { MongoClient, ObjectId, } = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to mongodb Server");
    }
    console.log("Successfully connected to mongodb");

    // delete many
    // db.collection('Todos').deleteMany({text: "Eat Lunch"}).then((result) => {
    //     console.log("Successfully deleted the document", result);
    // });
    // delete one

    db.collection('Todos').deleteOne({ text: "Eat Lunch" }).then((result) => {
        console.log("Successfully deleted the document", result);
    });
    //db.close();
})