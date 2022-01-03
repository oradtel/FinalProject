const mongoose = require('mongoose');

// we've provided a connection string with the form-user database as the name of the database.
// You can give whatever name you want instead of form-user
mongoose.connect("mongodb+srv://finalprojectbiu:OradGabyTamir@usersdb.u1g9t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});