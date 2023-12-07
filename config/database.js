const sql = require('mysql')

var poolPromise = sql.createPool({
	connectionLimit:4,
	user: 'root',
	// password: 'pass',
	database: 'SpaceBackend',
	server: 'localhost',
})

poolPromise.getConnection((err,connection)=> {
	if(err)
	throw err
	console.log('Database connected successfully')
	connection.release()
  })

module.exports = {
	sql, poolPromise
}