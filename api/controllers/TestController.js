/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	createUser: function(req, res){
		var params = req.query;
		var testUser = {};

		testUser.firstName = params.firstName;
		testUser.lastName = params.lastName;

		Test.create(testUser).exec(function(err, data) {
			if (err) {
				sails.log("There was an error adding the user");
				sails.log(err);
				res.send("There was an error");
			} else {
				sails.log("User was created!");
				sails.log(data);
				res.send(data);
			}
		});
    	//res.send("Hello World");
		//res.send(params);
	},
	sayhello:function(req,res){
		res.send("Hello there");
	}
};

