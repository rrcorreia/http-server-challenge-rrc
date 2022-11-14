import * as http from 'http';
const port = 3333;
const localHost = "localhost"

const server = http.createServer((request, response) => {
    let url = request.url.split('/');
    if (url[1] === '' ) {
      if (request.method === 'GET') {
        console.log(`Hello Galvanize, Server is running on ${localHost}:${port}`);
        response.end(`Server is running on ${localHost}:${port}`);
        response.end("Hello World");
      }
    }
    response.statusCode = 404;
    response.end();
  });

  server.listen(port, localHost, () => {
    console.log(`Server is running on ${localHost}:${port}`);
  });

