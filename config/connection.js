var deleteok = require('./deleteok');
var creativeid =require('./creativeid');


function connection(io,siteurl,storeDir,takefilepath,functionName,phone = false) {

    //用 website-scraper module的方法下載
    io.once('connection', function (socket) {
        console.log('連線ID:' + socket.id);
        //指定下載頁面的URL和下載後檔案放置路徑
        if(phone == false){
            var connect_id = socket.id
            var options = {
                urls: [siteurl],
                directory: storeDir + connect_id,
            };
        }
        else{
            var connect_id = socket.id
            var options = {
                urls: [siteurl],
                directory: storeDir + connect_id,
                request: {
                    headers: {
                      'User-Agent': 'Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19'
                    }
                  }
            };
        }


    //deleteok.js
    deleteok(io,socket,options);


    creativeid(io,socket,takefilepath,functionName)

    });
}
module.exports = connection;
