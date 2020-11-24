// 导入模块

const http = require('http');
const querystring = require('querystring');

// 创建 web 实例

const server = http.createServer();

// 创建监听 

server.on('request',(req,res)=>{
         
    let arr = [];

    req.on("data" , (buffer)=>{
        arr.push(buffer);
    })

    req.on('end',()=>{
         let buffer = Buffer.concat(arr);
         let str = buffer.toString();
         console.log(querystring.parse(str));
    });


});

// 启动服务

server.listen(8080,()=>{
    console.log("server is running at http://127.0.0.1:8080");
})