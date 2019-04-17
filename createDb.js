const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const uri = "mongodb+srv://User:~1qw23er45@cloudbox-4ufpe.mongodb.net/node1?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("Node1").collection("NewCollection");
    // perform actions on the collection object
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db("Node1");


    insertDocuments(db, collection, function() {
        client.close();
    });

});

const insertDocuments = function(db, collection, callback) {

    // Insert some documents
    collection.insertMany([
        {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
};
