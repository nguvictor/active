var express = require('express');
var router = express.Router();

router.route('/messages')
    .get(function(req, res){
        res.send({'messages':'Some Messages'});
    })
    .post(function(req, res){
        res.send({'messages':'Create Message'});
    });

router.route('/messages/:id')
    .get(function(req,res){
        res.send({message: 'Return message with id ' + req.params.id})
    })
    .put(function(req, res){
        res.send({'messages':'Modify Message with id ' + req.params.id});
    })
    .delete(function(req, res){
        res.send({'messages':'Delete Message with id ' + req.params.id});
    });

module.exports = router;
