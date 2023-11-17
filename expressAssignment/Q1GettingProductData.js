/*

Q.1 Build a Server Using Http Modu:e Node<S with api endpoints for Getting Products Dat9
" ‘/’ → send msg as “We:come to Men & Women Dummy Data”F
" ‘/men’ → send 10 products data of menF
" ‘/women’→G send 10 products data of wome;
" ‘/other’→ send response as page not found
Hin#: You can use any data, send data in json format

*/

const http=require('http');
PORT=5000;
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end('Welcome to men and women dummy data')
    }
    if(req.url=='/men'){
        const options={
            hostname:'fakestoreapi.com',
            path:"/products/1",
             method:'GET'
        }
       const apiReq=http.request(options,(apiRes)=>{
        apiRes.on('data',(data)=>{
            res.statusCode=200;
           res.setHeader('Content-Type','application/json');
           res.end(data.toString());
        })
       })
       apiReq.on('error',()=>{
        console.log(error);
       })
       apiReq.end();
    }

    if(req.url=='/women'){
        const options={
          hostname:'fakestoreapi.com',
          path:"/products/limit=5",
           method:'GET'
        }
        const apiReq=http.request(options,(apiRes)=>{
          apiRes.on('data',(data)=>{
              res.statusCode=200
              res.setHeader('Content-Type','application/json');
              res.end(data.toString());
          })
  
        })
  
        apiReq.on('error',()=>{
        console.log(error);
        })
  
        apiReq.end();
      }
  
      else{
          res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
          res.end('send request as page not found')
      }
})

server.listen(PORT,()=>{console.log('Server is running at ', PORT)});

