const express = require('express');
const jwt = require('jsonwebtoken');
const port = 5000;

const server = express();
server.use(express.json());

//JWT data
server.generateJwt = function() {
	var expiry = new Date();
	expiry.setDate(expiry.getDate() + 7);

	return jwt.sign(
		{
			_id: this._id,
			email: this.email,
			name: this.name,
			exp: parseInt(expiry.getTime() / 1000),
		},
		'MY_SECRET',
	); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

//Test route
server.get('/api', (req, res) => {
	res.send('Working');
});

//Sign Up routes

server.listen(port, () => console.log(`server running on port 5000`));
