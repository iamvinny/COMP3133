const express = require('express');
const mongoose = require('mongoose');

const User = require('./models/User');

const app = express();

const MONGODB = "mongodb+srv://root:IelABEKx2vngLmP7@cluster0.aklsnoa.mongodb.net/COMP3133?retryWrites=true&w=majority";
const SERVERPORT = 3000;

const bodyParser = require('body-parser');

// Use body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect(MONGODB, {useNewUrlParser: true})
.then(() => {
    console.log("MongoDB Connected");
    return app.listen({port: SERVERPORT});
})
.then((res) => {
    console.log(`Server running at http://localhost:${SERVERPORT}`)
});

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Create a new user with POST Rest API
app.post('/users', (req, res) => {
    // Validate to check if all fields are filled
    if(!req.body.username || !req.body.email || !req.body.city || !req.body.web || !req.body.zip || !req.body.phone) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }

    // Validate if username is >= 4 lenght
    if(req.body.username.length < 4) {
        return res.status(400).send({
            message: "Username must be at least 4 characters"
        });
    }

    // Validate if email is valid
    if(!req.body.email.includes("@")) { // we can check if @ is in the email
        return res.status(400).send({
            message: "Email is not valid"
        });
    }

    // Allow only alphabets and space while entering city name
    if(!/^[a-zA-Z ]+$/.test(req.body.city)) {
        return res.status(400).send({
            message: "City name can only contain letters and space"
        });
    }

    // Allow only valid web URL address (http or https is valid)
    if(!req.body.web.includes("http")) {
        return res.status(400).send({
            message: "Web URL is not valid"
        });
    }

    // Zip code format must be like 12345-1234 (DDDDD-DDDD, D = digit)
    if(!/^\d{5}-\d{4}$/.test(req.body.zip)) {
        return res.status(400).send({
            message: "Zip code is not valid"
        });
    }

    // Validate phone format like 1-123-123-1234 (D-DDD-DDD-DDD, D = digit)
    if(!/^\d-\d{3}-\d{3}-\d{4}$/.test(req.body.phone)) {
        return res.status(400).send({
            message: "Phone number is not valid"
        });
    }

    // Create user object
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      city: req.body.city,
      web: req.body.web,
      zip: req.body.zip,
      phone: req.body.phone
    });

    // Save user object to MongoDB
    newUser.save()
      .then(user => res.json(user))
      .catch(err => console.log(err));
});