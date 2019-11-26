const http = require('http');
const todos = [
    { id: 1, text: 'Todo One'},
    { id: 2, text: 'Todo Two'},
    { id: 3, text: 'Todo hree'}
]
const server = http.createServer((req, res)=>{  
    // res.statusCode = 404;
    // res.setHeader('Content-Type', 'application/json')
    // res.setHeader('X-powered-By', 'Node.js')

    const { method , url } = req

    let body = []

    req.on('data', chunk =>{
        body.push(chunk)    
    }).on('end', ()=>{
        body = Buffer.concat(body).toString();


        let status = 404;

        const response = {
            success: false,
            data: null,
            error: null
        } 

        if( method === 'GET' && url === '/todos'){
            status = 200;
            response.success = true;
            response.data = todos;
        }else if ( method === 'POST' && url === '/todos'){
            const { id , text } = JSON.parse(body);

            if(!id || !text){
                status = 400;
                response.error = 'Please provide id and Text'
            }else{
                todos.push({id, text});
                status = 201;
                response.success = true;
                response.data = todos;
            }


        }

        res.writeHead(status, {
            'Content-Type': 'application/json',
            'X-powered-By': 'Node.js'
        });

        res.end(JSON.stringify(response));  
    })

})

const PORT = 4000;

server.listen(PORT, ()=>console.log(`Server is running on ${PORT}`))        
