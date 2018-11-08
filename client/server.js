const express = require('express');
const port = 5000;

const server = express();
server.use(express.json());

//Test route
server.get('/api', (req, res) => {
	res.send('Working');
});

server.listen(port, () => console.log(`server running on port 5000`));
