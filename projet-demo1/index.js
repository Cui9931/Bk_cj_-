//  导入模块
const express = require("express")
//  创建实例
 const  app = express()
 //  设置监听
        
      app.get("/",(req,res)=>{
          res.send('hello world');
      });

      app.get('/html5',(req,res)=>{
          res.send("2003");
      });

     app.post('/post',(req,res)=>{
         res.send("董艾不学习");
     }) 


// 启动服务

app.listen(8080,()=>{
    console.log(" server is running at http://127.0.0.1:8080 ");
})