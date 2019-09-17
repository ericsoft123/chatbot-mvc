var express = require('express');
var router = express.Router();


const body_parser = require('body-parser');


let bank=require('../models/bank');
let greeting =require('../models/greeting');

let question=require('../models/question');



// parse JSON (application/json content-type)
router.use(body_parser.json());
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  //res.render('index', { title: 'hello' });
  res.json({ message: "Hello world" });
});


//route from my project

router.get("/greeting", (req, res) => {
  let great=greeting[Math.floor(Math.random() * Math.floor(greeting.length))];
  res.end(great);
});


router.get("/question/:id", (req, res) => {
  const questionId = req.params.id;
  res.end(question[questionId]);
});

router.get("/services", (req, res) => {
   
  
 


 
     res.json(bank.Services);
 



});


/*
router.get("/account/:id", (req, res) => {
   
   const itemId = req.params.id;
  
   const bankdata =bank.Account.find(account=>account.Account_number===itemId);

   if (bankdata) {
      res.json(bankdata);
   } else {
      res.json({ message: `item ${itemId} doesn't exist`})
   }



});*/



router.get("/account/:id", (req, res) => {
   
   const itemId = req.params.id;
   var dataname='Account_number';
 
   const bankdata =bank.Account.find(account=>account[dataname]===itemId);

   if (bankdata) {
      res.json(bankdata);
   } else {
      res.json({ message: `item ${itemId} doesn't exist`})
   }



});

router.get("/account/:id/:options", (req, res) => {
   //receive more variable by get request
  var data = {
     "accountdata": {
         "item_param":req.params.id,
         "options":req.params.options,
     }
 }; 


   //add dynamic option without if conditions

  const options = data.accountdata.options;
  
 

  //var dataname='Account_number';
  var dataname=options;//this is to make object parameters dynamic(ex:if Account_number it means that it will check Account number parameters under bank,js)
 
   const bankdata =bank.Account.find(account=>account[dataname]===data.accountdata.item_param);//check if object is available

   if (bankdata) {
      res.json(bankdata);
   } else {
      res.json({ message:"1"})
   }
 
//if(data.accountdata.options=='Account_infos')



});

//route from my project


module.exports = router;
