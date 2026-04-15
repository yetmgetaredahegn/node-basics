import http from 'http';

const PORT = 9000;
const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;
    res.writeHead(500, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: 'Hello World'}));
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});