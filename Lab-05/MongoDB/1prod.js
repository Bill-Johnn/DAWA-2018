var mongoose = require('mongoose'),
Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

var producto_schema = new Schema({
  nombre: String,
  descripcion: String,
  precio: String
});
prod_model = mongoose.model('producto', producto_schema,'producto');

module.exports = {
  show: function(req,res){
    prod_model.find({},function(err,items){
      if (!err){
        res.send(items);
      }else{
        return console.log(err);
      }
    });
  }else {
    prod_model.findOne({_id: req.query._id}, function(err,items){
      if (!err) {
        res.send(items);
      }else {
        return console.log(err);
      }
    });
  },
  create: function(req,res){

  },
  update: function(req,res){

  },
  delete: function(req,res){

  },
};

var schema = new Schema({
  name: String.
  binary: Buffer,
  living: Boolean,
  updated: { type: Date, default: Date.now},
  age: { type: Number, min: 18, max: 65, required: true},
  mixed: Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  array: [],
  ofString: [String],
  nested: { stuff: {type: String, lowercase: true, trim: true}}
});
