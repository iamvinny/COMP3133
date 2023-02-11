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
  res.send(`<h1>COMP3133 - Lab Exercise 04</h1>
  <h3>The following routes are available:</h3>
  <ul>
    <li>POST /users</li>
  </ul>
  <span>Example of a valid JSON object to be sent to the POST /users route:</span>
  <pre>
    <code>
    {
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "leanne.graham@gmail.com",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031",
        "website": "http://hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
    }
    </code>
  </pre>
  `);
});

// Create a new user with POST Rest API
app.post('/users', async (req, res) => {
    console.log(req.body);
    
    const user = new User(req.body)

    // Save user object to MongoDB
    try {
        await user.save((err) => {
        if (err) {
            res.send(err);
        } else {
            res.send(user);
        }
        });
    } catch (err) {
        res.status(500).send(err);
    }

});