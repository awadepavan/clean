const fs = require('fs');

const requestHandeler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body>');
        res.write('<h1>Enter your message below</h1>');
        res.write(`
        <form action="/message" method="POST">
            <input type="text" name="message">
            <button type="submit">Send</button>
        </form>
    `);
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = decodeURIComponent(parsedBody.split('=')[1].replace(/\+/g, ' '));
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
            res.write('<body>');
            res.write(`<h1> ${message.split(' ').join('+')}</h1>`);
            res.write(`
            <form action="/message" method="POST">
                <input type="text" name="message">
                <button type="submit">Send</button>
            </form>
        `);
            res.write('</body>');
            res.write('</html>');
            return res.end();
        });
    }
}

module.exports = requestHandeler;


