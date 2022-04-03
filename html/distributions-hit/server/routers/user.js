const {getData} = require('../scripts/ExperimentData.js');

const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.post('/experimentdata', (req, res) => {
    var data = getData();
    console.log(data);
    res.send(data);
  });

router.post('/register', async (req, res) => {
    // We will be passing the data to this API in JSON format. The Express server makes it available inside the 
    // req.body object so we're destructuring the email and password value from it
    //const { user_email, user_password } = req.body;

    console.log('req.body', req.body);

    // we're first checking if there is any user with the provided email address
    //let user = await User.findOne({ user_email });
    // If such a user exists, then we're returning an error back to the client (which is our React app)
    //if (user) {
     //   return res.status(400).send('User with the provided email already exist.');
    //}

    try {
        // we pass all the user data (like first_name, last_name, user_email, users_password, country, state and city)
        // which is present in the req.body to the User constructor 
        user = new User(req.body);
        // hash the password before saving it to the database
        //user.user_password = await bcrypt.hash(user_password, 8);

        // save all the details along with hashed password into the MongoDB database.
        await user.save();
        // Once we're done, we're sending back the response with the status code of 201 which describes that 
        // something has been created.
        res.status(201).send();
    } catch (e) {
        res.status(500).send('Something went wrong. Try again later.');
    }
});

// we're exporting the express router so we can use it in the index.js file.
module.exports = router;