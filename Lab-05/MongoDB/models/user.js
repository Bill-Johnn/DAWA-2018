var mongoose = require('mongoose'),
Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

var user_schema = new Schema({
	username: String,
	password: String
});

user_model = mongoose.model('user',user_schema,'user');

module.exports = {
	show: function(req, res){
		if(req.query._id==null){
			prod_model.find({},function(err,items){
				if(!err){
					//res.send(items);
					res.render('table',{data: items});
				}else{
					return console.log(err);
				}
			});
		}else{
			prod_model.findOne({_id: req.query._id},function(err,items){
				if (!err) {
					res.send(items);
				}else{
					return console.log(err);
				}
			});
		}
	},
	create: function(req, res){
		console.log(req.body, req.query);
		var item = {
			username: req.body.username,
			password: req.body.password
		};
		var nuevo = new user_model(item).save();
		res.send(nuevo);
	},
	update: function(req,res){
		user_model.findOne({_id: req.body._id},function(err,user){
			user.username = req.body.username;
			user.password = req.body.password;
			user.save();
			res.send(user);
		});
	},
	delete: function(req,res){
		user_model.findOne({_id: req.body._id},function(err,user){
			user.remove();
			res.send({status:true});
		});
	},
	validar: function(req,res){
		user_model.findOne({username: req.body.username},function(err,user){
			if(!err){
				if(req.body.password == user.password){
					res.send({status:true});
				}else{
					res.send({status:false});
				}
			}else{
				console.log(err);
			}
		});
	},
};
