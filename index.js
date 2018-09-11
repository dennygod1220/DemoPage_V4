var fs = require("fs");
var cheerio = require("cheerio");
var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);
var PORT = 9999;
app.use(express.static(__dirname + "/public"));

//載入模組
var connection = require("./config/connection");

app.get("/", function (req, res) {
  res.sendfile("./index.html");
});

// //三立新聞
// app.get('/setn', function (req, res) {
//     res.sendfile('public/page/setn.html');
//     setn(io);

// })
// // TVBS
// app.get('/tvbs', function (req, res) {
//     res.sendfile('public/page/tvbs.html');
//     tvbs(io);
// })

//測試封裝
app.get("/test", function (req, res) {
  res.sendfile("public/page/test.html");
  //取檔案的路徑
  takefilepath = "./public/store/test/";
  //在modifyhtml.js 中的 function 名稱
  functionName = "testdata2";
  //該網站下載後儲存的目錄
  storeDir = "public/store/test/";
  //要下載的網站URL
  siteurl = "https://www.setn.com/";

  connection(io, siteurl, storeDir, takefilepath, functionName);
});

//三立新聞 970250
app.get("/setn", function (req, res) {
  res.sendfile("public/page/setn.html");
  siteurl = "https://www.setn.com/";
  storeDir = "public/store/setn/";
  takefilepath = "./public/store/setn/";
  functionName = "setn";
  connection(io, siteurl, storeDir, takefilepath, functionName);
});

//三立新聞 手機板 320 480
app.get("/setn_m_300250", function (req, res) {
  res.sendfile("public/page/setn_m_320480.html");
  siteurl = "https://www.setn.com/m/";
  storeDir = "public/store/setn_m_320480/";
  takefilepath = "./public/store/setn_m_320480/";
  functionName = "setn_m_320480";
  connection(io, siteurl, storeDir, takefilepath, functionName);
});

// TVBS 300600
app.get("/tvbs", function (req, res) {
  res.sendfile("public/page/tvbs.html");
  siteurl = "https://news.tvbs.com.tw/";
  storeDir = "public/store/tvbs/";
  takefilepath = "./public/store/tvbs/";
  functionName = "tvbs";
  connection(io, siteurl, storeDir, takefilepath, functionName);
});

// udn 聯合新聞 300250
app.get("/udn_300250", function (req, res) {
  res.sendfile("public/page/udn_300250.html");
  siteurl = "https://udn.com/news/index";
  storeDir = "public/store/udn_300250/";
  takefilepath = "./public/store/udn_300250/";
  functionName = "udn_300250";
  connection(io, siteurl, storeDir, takefilepath, functionName);
});

//udn 聯合新聞 手機 300250
app.get("/udn_m_300250", function (req, res) {
  res.sendfile("public/page/udn_m_300250.html");
  siteurl = "https://udn.com/mobile/index";
  storeDir = "public/store/udn_m_300250/";
  takefilepath = "./public/store/udn_m_300250/";
  functionName = "udn_m_300250";
  connection(io, siteurl, storeDir, takefilepath, functionName);
});

//udn 聯合新聞 手機板 320 480
app.get("/udn_m_320480", function (req, res) {
  res.sendfile("public/page/udn_m_320480.html");
  siteurl = "https://udn.com/mobile/index";
  storeDir = "public/store/udn_m_320480/";
  takefilepath = "./public/store/udn_m_320480/";
  functionName = "udn_m_320480";
  connection(io, siteurl, storeDir, takefilepath, functionName);
});

// 關鍵評論網 m 300250
app.get("/thenewslens_m_300250", function (req, res) {
  res.sendfile("public/page/thenewslens_m_300250.html");
  siteurl = "https://www.thenewslens.com/";
  storeDir = "public/store/thenewslens_m_300250/";
  takefilepath = "./public/store/thenewslens_m_300250/";
  functionName = "thenewslens_m_300250";
  connection(io, siteurl, storeDir, takefilepath, functionName);
});
// 關鍵評論網 970250
app.get("/thenewslens_970250", function (req, res) {
  res.sendfile("public/page/thenewslens_970250.html");
  siteurl = "https://www.thenewslens.com/";
  storeDir = "public/store/thenewslens_970250/";
  takefilepath = "./public/store/thenewslens_970250/";
  functionName = "thenewslens_970250";
  connection(io, siteurl, storeDir, takefilepath, functionName);
});
// 旅食樂 m 300250
app.get("/nownews_m_300250", function (req, res) {
  res.sendfile("public/page/nownews_m_300250.html");
  siteurl = "http://play.nownews.com/";
  storeDir = "public/store/nownews_m_300250/";
  takefilepath = "./public/store/nownews_m_300250/";
  functionName = "nownews_m_300250";
  connection(io, siteurl, storeDir, takefilepath, functionName);
});
// 旅食樂 m 32050
app.get("/nownews_m_32050", function (req, res) {
  res.sendfile("public/page/nownews_m_32050.html");
  siteurl = "http://play.nownews.com/";
  storeDir = "public/store/nownews_m_32050/";
  takefilepath = "./public/store/nownews_m_32050/";
  functionName = "nownews_m_32050";
  connection(io, siteurl, storeDir, takefilepath, functionName);
});
// 女生集合 300250
app.get("/tagsis_300250", function (req, res) {
  res.sendfile("public/page/tagsis_300250.html");
  siteurl = "http://www.tagsis.com/";
  storeDir = "public/store/tagsis_300250/";
  takefilepath = "./public/store/tagsis_300250/";
  functionName = "tagsis_300250";
  connection(io, siteurl, storeDir, takefilepath, functionName, true);
});
// Bella濃濃 728 90
app.get("/bella_72890", function (req, res) {
  res.sendfile("public/page/bella_72890.html");
  siteurl = "https://www.bella.tw/";
  storeDir = "public/store/bella_72890/";
  takefilepath = "./public/store/bella_72890/";
  functionName = "bella_72890";
  connection(io, siteurl, storeDir, takefilepath, functionName);
});
// 卡提諾 320 480 蓋板
app.get("/ck101_m_320480", function (req, res) {
  res.sendfile("public/page/ck101_m_320480.html");
  siteurl = "https://ck101.com/thread-4480897-1-1.html?ref=goodcontent";
  storeDir = "public/store/ck101_m_320480/";
  takefilepath = "./public/store/ck101_m_320480/";
  functionName = "ck101_m_320480";
  connection(io, siteurl, storeDir, takefilepath, functionName, true);
});
// Yahoo 內文全屏
app.get("/yahoo_m_scroller", function (req, res) {
  res.sendfile("public/page/yahoo_m_scroller.html");
  siteurl = "https://tw.mobi.yahoo.com/news";
  storeDir = "public/store/yahoo_m_scroller/";
  takefilepath = "./public/store/yahoo_m_scroller/";
  functionName = "yahoo_m_scroller";
  connection(io, siteurl, storeDir, takefilepath, functionName, true);
});
// 痞客邦 320 480 蓋板 手機(有衝突可能)
app.get("/pixnet_m_320480", function (req, res) {
  res.sendfile("public/page/pixnet_m_320480.html");
  siteurl = "https://vivianchiu.pixnet.net/blog/category/1884106";
  storeDir = "public/store/pixnet_m_320480/";
  takefilepath = "./public/store/pixnet_m_320480/";
  functionName = "pixnet_m_320480";
  connection(io, siteurl, storeDir, takefilepath, functionName, true);
});
// Juksy 320 480 蓋板 手機(有衝突可能)
app.get("/juksy_m_320480", function (req, res) {
  res.sendfile("public/page/juksy_m_320480.html");
  siteurl = "https://m.juksy.com/archives/81559";
  storeDir = "public/store/juksy_m_320480/";
  takefilepath = "./public/store/juksy_m_320480/";
  functionName = "juksy_m_320480";
  connection(io, siteurl, storeDir, takefilepath, functionName, true);
});
// 三立新聞 320 480 蓋板 手機(有衝突可能)
app.get("/setn_m_320480", function (req, res) {
  res.sendfile("public/page/setn_m_320480.html");
  siteurl = "";
  storeDir = "public/store/setn_m_320480/";
  takefilepath = "./public/store/setn_m_320480/";
  functionName = "setn_m_320480";
  connection(io, siteurl, storeDir, takefilepath, functionName, true);
});
// Pre roll Test
app.get("/litv_pre", function (req, res) {
  res.sendfile("public/page/setn_m_320480.html");
  siteurl =
    "https://www.litv.tv/vod/ent/content.do?brc_id=120&content_id=VOD00128002";
  storeDir = "public/store/litv_pre/";
  takefilepath = "./public/store/litv_pre/";
  functionName = "litv_pre";
  connection(io, siteurl, storeDir, takefilepath, functionName, true);
});


//旅食樂 800600蓋板
app.get("/nownews_800600", function (req, res) {
  res.sendfile("public/page/nownews_800600.html");
  siteurl = "http://play.nownews.com/";
  storeDir = "public/store/nownews_800600/";
  takefilepath = "./public/store/nownews_800600/";
  functionName = "nownews_800600";
  connection(io, siteurl, storeDir, takefilepath, functionName);
});

//樂時尚 800600蓋板
app.get("/styletc_800600", function (req, res) {
  res.sendfile("public/page/styletc_800600.html");
  siteurl = "http://www.styletc.com/";
  storeDir = "public/store/styletc_800600/";
  takefilepath = "./public/store/styletc_800600/";
  functionName = "styletc_800600";
  connection(io, siteurl, storeDir, takefilepath, functionName);
});
server.listen(PORT);