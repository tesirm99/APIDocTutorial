const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/admin', { user: "root", pass: "rootpassword", useUnifiedTopology: true, useNewUrlParser: true, directConnection:true}).then(
 
    () => { console.log("Connected to DB") },
     
    err => { console.log(err) }
     
);

module.exports = mongoose;