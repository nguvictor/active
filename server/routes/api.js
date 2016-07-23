var express = require('express');
var router = express.Router();

router.route('/messages')
    .get(function(req, res){
        res.send({'messages':'Some Messages'});
    })
    .post(function(req, res){
        res.send({'messages':'Create Message'});
    });

module.exports = router;
