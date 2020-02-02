const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors())

// bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const mongoose = require('mongoose');

// Routes
const User = require('./routes/user');


const port = process.env.PORT || 8000;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://formdb:formdb1234@ds019906.mlab.com:19906/formdb')
    .then(() => console.log('Connected with DB'))
    .catch(err => console.log(err))

app.listen(port, (req,res) => console.log(`Connected on port ${port}`));

app.get('/', (req, res) =>{
    res.send('Index')
})

app.use('/register', User);
