var express = require('express');
var router = express.Router();
var User = require('../models/messageboard.schema.js');

// return all Users
router.get('/', function(req, res) {
  // find (select) all documents in our collection
  User.find({}, function(err, data) {
    if(err) {
      console.log('find error:', err);
      res.sendStatus(500);
    } else {
      res.send(data);
      // res.send(result.rows)
    }
  });
});
router.post('/', function(req, res) {
  console.log('log the data: ', req.body);

  // create an object instance from our Person model
  var addUser = new User(req.body);

  // insert into our collection
  addUser.save(function(err, data) {
    console.log('saved data:', data);
    if(err) {
      console.log('save error: ', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });

});


module.exports = router;
