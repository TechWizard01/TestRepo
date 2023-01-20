var express = require('express');
var router = express.Router();
// const user = require("../model/users");
const uc = require('./../controllers/user-controller');

/* GET users listing. */
router.post('/create', uc.create);
router.post('/delete', uc.delete);
router.post('/update', uc.update);
router.post('/', uc.getAll);
router.post('/get', uc.get);
module.exports = router;
