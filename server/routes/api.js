var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Message = mongoose.model('Message')

router.use(function(req, res, next){
    //This makes the get method publicly accessible
    if(req.method === "GET"){
        return next();
    }
    if(req.isAuthenticated()){
       return next();
    }

    return res.redirect('/#login');
});

router.route('/messages')
    .get(function(req, res){
        Message.find(function(err, data){
            if(err){
                res.send(500,'No Messages Found');
            }
            return res.send(data);

        });

    })
    .post(function(req, res){
        var message = new Message();
        message.text = req.body.text;
        message.username = req.body.username;
        message.save(function(err, data){
            if(err){
                res.send(500,'No Messages Saved');
            }
            return res.json(data);

        });
    });

router.route('/messages/:id')
    .get(function(req,res){
        Message.findbyId(req.params.id,function(err,message){
           if(err)
               res.send(err);
            res.json(message);
        });
    })
    .put(function(req, res){
        Message.findById(req.params.id, function(err, message){
			if(err)
				res.send(err);

			message.username = req.body.username;
			message.text = req.body.text;

			message.save(function(err, message){
				if(err)
					res.send(err);

				res.json(post);
			});
		});
    })
    .delete(function(req, res){
        Message.remove({
			_id: req.params.id
		}, function(err) {
			if (err)
				res.send(err);
			res.json("deleted message");
		});
    });

module.exports = router;
