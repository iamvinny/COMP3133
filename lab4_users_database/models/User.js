const mongoose = require('mongoose');

// Create a Mongoose schema for the User model
const userSchema = new mongoose.Schema({
    username:{
        type : String,
        required : [true, 'Please, inform a usermane.'],
        minlength : 4 // b.	Username field must have length >=4
    },
    name:{
        type : String,
        required : [true, 'Please, inform a name.']
    },
    email:{
        type : String,
        required : [true, 'Please, inform a valid email address.'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please, check your email.'] // c.	Allow only valid email addresses
    },
    address:{
        street :  {
            type : String,
            required : true,
        },
        city :  {
            type : String,
            required : true,
            match : [/^[a-zA-Z\s]*$/, 'Please, inform a valid city name.' ] // d. Allow only alphabets and space while entering city name
        },
        suite :  {
            type : String,
            required : true
        },
        zipcode :  {
            type : String,
            required : true,
            match : [/[0-9]{5}-[0-9]{4}$/, 'Please, inform a valid zipcode.'] // f.	Zip code format must be like 12345-1234 (DDDDD-DDDD, D = digit)
        },
        geo :  {
            lat : {
                type : String,
                required : true
            },
            lng : {
                type : String,
                required : true
            }
        }
    },
    phone:{
        type : String,
        required : [true, 'Please, inform a phone number.'],
        match : [/[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}$/ , 'Please, inform a valid phone number.'] // g.	Validate phone format like 1-123-123-1234 (D-DDD-DDD-DDD, D = digit)
    },
    website:{
        type : String,
        required : [true, 'Please enter your website'],
        match : [/^((http|https):\/\/)/, 'Please, inform a valid website.'] // e. Allow only valid web URL address (http or https is valid)
    },
    company : {
        name : {
            type : String,
            required : true
        },
        catchPhrase : {
            type : String,
            required : true
        },
        bs : {
            type : String,
            required : true
        }
    }
});

// Create a Mongoose model for the User model
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;