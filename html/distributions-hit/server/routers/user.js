const {getData} = require('../scripts/ExperimentData.js');

const express = require('express');
const User = require('../models/user');
const expModel = require('../models/expModel');
const bcrypt = require('bcryptjs');
const router = express.Router();
var timeStart,timeDone;
router.get('/experimentdata', (req, res) => {
    var data = getData();
    const d = new Date();
    const seconds = 1000 * 60 * 60;
    timeStart = Date.now();
    // console.log("timeStart: " + timeStart);
    //console.log("user: " + data);
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
    const d = new Date();
    const seconds = 1000 * 60 * 60;
    timeDone = Date.now();
    // console.log("timeDone: " + timeDone);
    // console.log("gam vegam: " + Math.floor((timeDone - timeStart) / 1000));
    var timeTaken=Math.floor((timeDone - timeStart) / 1000);
    if (timeTaken > 75) {
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
            console.log(e);
        }
    }
    else {
        res.status(201).send();
    }
});

router.post('/exp', async (req, res) => {
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
        ExpModel = new expModel(req.body);
        // hash the password before saving it to the database
        //user.user_password = await bcrypt.hash(user_password, 8);

        // save all the details along with hashed password into the MongoDB database.
        await ExpModel.save();
        // Once we're done, we're sending back the response with the status code of 201 which describes that 
        // something has been created.
        res.status(201).send();
    } catch (e) {
        res.status(500).send('Something went wrong. Try again later.');
    }
});

// we're exporting the express router so we can use it in the index.js file.
module.exports = router;