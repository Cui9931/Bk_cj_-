//  导入模块

const http = require('http');
const url = require('url');


// 创建 web 实例

const server = http.createServer();

//  设置监听 

server.on("request", (req,res)=>{
         let {query} =  url.parse(req.url,true);
         console.log({query});
})

//  启动服务

server.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080 ');
})