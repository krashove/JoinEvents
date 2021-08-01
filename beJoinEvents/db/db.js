var mongoose = require('mongoose');

//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/balance', {
mongoose.connect(process.env.MONGODB_URL, {
  useCreateIndex : true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

console.log('Conectado a db JoinEvents');

module.exports={
	mongoose
};