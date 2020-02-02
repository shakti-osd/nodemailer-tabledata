const express = require('express')
const router = express.Router();
const nodemailer = require('nodemailer');

var multer = require('multer')

// File Upload
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, 'public')
},
filename: function (req, file, cb) {
  cb(null, Date.now() + '-' +file.originalname )
}
})

var upload = multer({ storage: storage }).single('avatar');


const User = require('../model/Register');

const list = require('../controllers/user-controller');

router.get('/list', (req,res) => {
    res.send(list)
})

router.post('/', (req,res) => {

    
  upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        console.log(json(err));
      } else if (err) {
        console.log(json(err));
      }
      console.log(req.file.filename)

    })

    // Nodemailer
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'shakti.opensourcedeveloper@gmail.com',
        pass: ''
      }
    });
    
    var mailOptions = {
      from: 'shakti.opensourcedeveloper',
      to: 'shakti.esource@gmail.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    

    
    
    User.findOne({email: req.body.email})
        .then(user => {
            if(user){                 
                  res.send('User already registered')
            }else{
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    avatar: req.file.filename
                });

                newUser.save()
                    .then(() => res.send('User registered successfully'))
                    .catch(err => res.send('Something went wrong ' + err))
            }

            
        })
        .catch(err => res.send('Error2: ' +err))
})

module.exports = router;