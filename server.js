import http from 'http';

const PORT = process.env.PORT;
const server = http.createServer((req, res) => {
    try {
        if (req.method === 'GET') { 
            if(req.url === '/') {
                res.writeHead(200, {'Content-Type': 'application/html'});
                res.end('<h1>Homepage</h1>');
            }
            else if(req.url === '/about') {
                res.writeHead(200, {'Content-Type': 'application/html'});
                res.end('<h1>About Page</h1>');
            }
            else {
                res.writeHead(404, {'Content-Type': 'application/html'});
                res.end('<h1>Page Not Found</h1>');
            }
                }
        else {
            throw Error('Method Not Allowed');
        }
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'application/plain'});
        res.end('Server Error');
    }
    
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});