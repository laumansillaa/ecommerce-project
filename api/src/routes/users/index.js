const router = require('express').Router();

router.post('/newUser', require('./newUser'));
router.post('/login', require(('./login')))
router.get('/users', require('./user'))



module.exports = router;