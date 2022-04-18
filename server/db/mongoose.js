var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://satish:admin123@cluster0.mxgtu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

	.then(() => {
		console.log("Connected to MongoDB database...");
	})
	.catch((e) => {
		console.log("Connection falied...")
	});

module.exports = {mongoose};
