var app = require('./config/express');

app.get('/create', (req, res) => {
	let sql = 'CREATE DATABASE userdb'
	
})

var port = process.env.PORT || 3333
app.listen(port, function(){
	console.log('Server ON in Port' + port)
})
