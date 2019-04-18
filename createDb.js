const User = require('models/user').User;

let user = new User({
    username: "Tester",
    password: "secret"
});

user.save().then(() => console.log(arguments));

/*/
//MONGOOSE CONNECTION

const mongoose = require('mongoose');
const uri = "mongodb+srv://User:~1qw23er45@cloudbox-4ufpe.mongodb.net/Node1?retryWrites=true";
mongoose.connect(uri, {useNewUrlParser: true});

const Schema = mongoose.Schema;
const BlogPost = new Schema({
    title: String,
    body: String,
    date: Date
});

BlogPost.methods.meow = function () {
    console.log(this.get('title'));
};

const Cat = mongoose.model('Cat', BlogPost);

const kitty = new Cat({
    title: 'Zildjian',
    body: 'Meow',
    date: Date.now()
});

kitty.save().then(() => kitty.meow());
/*/


//MONGODB NATIVE DRIVER to MONGODB CONNECTION \|/ //

/*/const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const uri = "mongodb+srv://User:~1qw23er45@cloudbox-4ufpe.mongodb.net/Node1?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {

    const collection = client.db("Node1").collection("NewCollection");
    const db = client.db("Node1");

    // perform actions on the collection object
    assert.equal(null, err);
    console.log("Connected successfully to server");

    //insertDocuments(db, collection, function () {
        //updateDocument(db, collection, function () {
            //removeDocument(db, collection, function () {
                client.close();
            //});
        //});
    //});

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

const findDocuments = function(db, collection, callback) {

    // Find some documents
    collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs);
        callback(docs);
    });
}

const updateDocument = function(db, collection, callback) {

    // Update document where a is 2, set b equal to 1
    collection.updateOne({ a : 2 }
        , { $set: { b : 1 } }, function(err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            console.log("Updated the document with the field a equal to 2");
            callback(result);
        });
}

const removeDocument = function(db, collection, callback) {

    // Delete document where a is 3
    collection.deleteOne({ a : 3 }, function(err, result) {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        console.log("Removed the document with the field a equal to 3");
        callback(result);
    });
}
/*/