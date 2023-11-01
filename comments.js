// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var port = 3000;

// Create web server
var server = http.createServer(function(request, response) {
    var parsedUrl = url.parse(request.url);
    var resource = parsedUrl.pathname;
    console.log('resource path=%s', resource);

    // 1. 요청된 자원이 /hello 이면
    if(resource == '/hello') {
        // 2. hello.html 파일을 읽은 후
        fs.readFile('hello.html', 'utf-8', function(err, data) {
            // 2.1 읽으면서 오류가 발생하면 오류의 내용을
            if(err) {
                response.writeHead(500, {'Content-Type':'text/html'});
                response.end('500 Internal Server Error : ' + err);
                console.log(err);
            }
            // 2.2 읽으면서 오류가 발생하지 않으면
            else {
                // 3. 읽은 데이터를 클라이언트에게 응답한다.
                response.writeHead(200, {'Content-Type':'text/html'});
                response.end(data);
            }
        });
    }
    // 1. 요청된 자원이 /hello 아니면
    else {
        // 2. 404 Not Found 응답 메시지를 클라이언트에게 응답한다.
        response.writeHead(404, {'Content-Type':'text/html'});
        response.end('404 Page Not Found');
    }
});

// 3. 서버를 실행하여 대기한다.
server.listen(port, function() {
    console.log('Server is running...');
});

