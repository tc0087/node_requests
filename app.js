var http = require('http')

const server = http.createServer((req, res) => {
	const url = req.url
	if(url === '/'){
		res.write('home')
	}
	if(url === '/signup'){
		res.write('signup')
	}
	res.end()
})

server.listen(3000)