const { MongoClient, ObjectId } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/ToDoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to connect to mongodb Server");
    }
    console.log("Successfully connected to mongodb");

    // db.collection("Todos").findOneAndUpdate(
    //   { _id: new ObjectId("5b1ad9da10d31fdc625a1fac") },
    //   {
    //     $set: {
    //       completed: true
    //     }
    //   },
    //   {
    //     returnOriginal: false
    //   }
    // ).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate(
        { _id: new ObjectId('5b1982c9efc073900a347ea7')},
        {
            // $set: {
            //     name: "Simranjeet Rai",
            // },
            $inc: {
                age: 1
            }
        }, 
        {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result)
    });
    //db.close();
  }
);
