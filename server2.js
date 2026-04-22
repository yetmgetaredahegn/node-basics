import {createServer} from 'http';

const PORT = process.env.PORT;

const users = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Charlie'}
];

const server = createServer((req, res) => {
    if(req.url === '/api/users' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(users));
    } else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[3];
        const user = users.find(u => u.id === parseInt(id));
        if(user){
            res.setHeader('Content-Type','application/json');
            res.write(JSON.stringify(user));
            res.end();
        } else {
            res.setHeader('Content-Type', 'application/json' );
            res.statusCode = 404;
            res.end(JSON.stringify({message: 'User not Found'}));
        }
    }
     else {
        res.setHeader('Content-Type', 'application/json' );
        res.statusCode = 404;
        res.end(JSON.stringify({message: 'Route not Found'}));
    }
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});