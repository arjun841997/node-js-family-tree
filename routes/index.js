var express = require('express');
var router = express.Router();
var Family = require('../models/family')


router.get('/', function(req, res, next) {

  Family.find({}).exec((err, data)=> {
    if(err){
      res.status(400);
      res.send({error: 'Unable to get Save Family.'})
    }else{
      res.status(200)
      res.send({data})
    }
  })  
});

router.post('/', function(req, res, next) {
  console.log(req.body)  
  let familyObject = req.body
  const newFamily = new Family(familyObject)
  newFamily.save((err,result) => {
    if(err){
      res.status(400);
      res.send({error: 'Unable to Save Family.'})
    }else{
      res.status(200)
      res.send({message: 'Family Saved successfully.'})
    }
  })
});

module.exports = router;
