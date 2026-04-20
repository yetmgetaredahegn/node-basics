import http from 'http';
import fs from 'fs/promises'
import url from 'url';
import path from 'path'
const PORT = process.env.PORT;

const _filename = url.fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename)

const server = http.createServer(async(req, res) => {
    try {
        if (req.method === 'GET') { 
            let filePath;
            if(req.url === '/') {
                filePath = path.join(_dirname,'public','index.html');
            }
            else if(req.url === '/about') {
                filePath = path.join(_dirname,'public','about.html');
            }
            else {
                throw new Error('Not Found');
            }
            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
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