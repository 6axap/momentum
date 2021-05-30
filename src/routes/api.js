var DAO = require('../dao')

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/get', async function(req, res, next) {
  let response = await DAO.getData()
  res.json(response);
});

// POST 
router.post('/add', async function(req, res, next) {
  let request = req.body
  console.log(request)
  let response = await DAO.postData(request)
  res.json(response);
  console.log(response)
});

module.exports = router;
