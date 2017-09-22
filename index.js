const Sequelize = require('sequelize'); // Constructor function

const db = new Sequelize("postgres://localhost:5432/sequelizedb"); // Connect to server

const User = db.define("user", {
	name: Sequelize.STRING,
	age: Sequelize.INTEGER,
	alive: Sequelize.BOOLEAN
});

User.sync() // Syncronize - check to see if table exists, if false, then create
	.then(() => {
		console.log("Syncronized the DB!")
	

User.create({
	name: "Test",
	age: 23,
	alive: true
});

	User.findAll()
	.then(data => {
		data.forEach(function(val) {
			console.log(val.dataValues)
		})
		// console.log(data.dataValues, data.dataValues.age);
	})
	

})