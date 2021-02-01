const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const connectionURL = 'mongodb://127.0.0.1:27017';
const dbName = 'task-manager';

mongoClient.connect(connectionURL,{useNewUrlParser:true,useUnifiedTopology:true},(error,client) => {
    if(error) {
        return console.log("unable to connect to database");
    }
    const db = client.db(dbName);

    db.collection('users').insertOne({
        name:'Atul',
        age:'32'
    }, (error,result) => {  
        if(error) {
            return console.log("unable to insert user");
        }
        console.log(result.ops);
    })
})
