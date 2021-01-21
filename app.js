const express  =  require('express'),  
      app = express(),
//Listen On Server
app.listen(process.env.PORT ||3000,function (err) {
    if(err){
       console.log(err);
    }else {
    console.log("Server Started At Port 3000");  }
});
