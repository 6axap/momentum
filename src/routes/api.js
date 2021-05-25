var DAO = require('../dao')

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  let response = await DAO.getData()
  res.json(response);
});


module.exports = router;
