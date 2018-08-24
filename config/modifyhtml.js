var fs = require('fs');
var cheerio = require('cheerio');

var modifyhtml = {
    modifyhtml: function (socketID, path, funcname) {
        fs.readFile(path + socketID + '/index.html', 'utf8', function (err, data) {
            testdata[funcname](data);
            // testdata(data);
        });
        var testdata = {

            testdata2: function (data) {
                var $ = cheerio.load(data);
                $("script[src='advertisement']").remove();
                $('<ins class="clickforceads" style="display:inline-block;width:970px;height:250px;" data-ad-zone="7965"></ins><script async type="text/javascript" src="//cdn.doublemax.net/js/init.js"></script>').insertAfter('#bar_ad');
                fs.writeFile(path + socketID + '/index.html', $.html(), function () {
                    console.log('callback')
                });
            },
            //增加網站 將該網站需修改的HTML部份以及需要新增的版位code家在這裡
            setn: function (data) {
                var $ = cheerio.load(data);
                $("script[src='advertisement']").remove();
                $('<ins class="clickforceads" style="display:inline-block;width:970px;height:250px;" data-ad-zone="7965"></ins><script async type="text/javascript" src="//cdn.doublemax.net/js/init.js"></script>').insertAfter('#bar_ad');
                fs.writeFile(path + socketID + '/index.html', $.html(), function () {
                    console.log('callback setn')
                });
            },

            //TVBS
            tvbs: function (data) {
                var $ = cheerio.load(data);
                $("#v4_news_desktop_index_superrec_L2").remove();
                $('<ins class="clickforceads" style="display:inline-block;width:300px;height:600px;" data-ad-zone="7585"></ins><script async type="text/javascript" src="//cdn.doublemax.net/js/init.js"></script>').insertAfter('.ad_300x600.margin_b20');
                fs.writeFile('./public/store/tvbs/' + socketID + '/index.html', $.html(), function () {
                    console.log('callback tvbs')
                });
            },
            //udn
            udn_300250: function (data) {
                var $ = cheerio.load(data);
                $("#div-gpt-ad-1500889082311-1").children().remove();
                $('<ins class="clickforceads" style="display:inline-block;width:300px;height:250px;" data-ad-zone="7930"></ins><script async type="text/javascript" src="//cdn.doublemax.net/js/init.js"></script>').insertAfter("#div-gpt-ad-1500889082311-1");
                fs.writeFile('./public/store/udn_300250/' + socketID + '/index.html', $.html(), function () {
                    console.log('callback udn_300250')
                });
            },
            //udn手機 300250
            udn_m_300250: function (data) {
                var $ = cheerio.load(data);
                $("#div-gpt-ad-1488941878893-0").children().remove();
                $('#div-gpt-ad-1488941878893-0').append('<div style="text-align: center;"><ins class="clickforceads" style="display:inline-block;width:300px;height:250px;" data-ad-zone="7930"></ins><script async type="text/javascript" src="//cdn.doublemax.net/js/init.js"></script></div>')
                fs.writeFile(path + socketID + '/index.html', $.html(), function () {
                    console.log('callback udn_m_300250')
                });
            },
            //udn手機 320480
            udn_m_320480: function (data) {
                var $ = cheerio.load(data);
                $(".ads-container").children().remove();
                $(".ads-container").append('<ins class="clickforceads" style="display:inline-block;width:320px;height:480px;left:0;top:0;" data-ad-zone="8107"></ins><script async type="text/javascript" src="//cdn.doublemax.net/js/init.js"></script>')
                fs.writeFile(path + socketID + '/index.html', $.html(), function () {
                    console.log('callback setn')
                });
            },

            //關鍵評論網 m 300250
            thenewslens_m_300250: function (data) {
                var $ = cheerio.load(data);
                $("#div-gpt-ad-1516246245198-3").children().remove();
                $("#div-gpt-ad-1516246245198-3").append('<div style="text-align: center;"><ins class="clickforceads" style="display:inline-block;width:300px;height:250px;" data-ad-zone="7930"></ins><script async type="text/javascript" src="//cdn.doublemax.net/js/init.js"></script></div>');
                fs.writeFile('./public/store/thenewslens_m_300250/' + socketID + '/index.html', $.html(), function () {
                    console.log('callback thenewslens_m_300250')
                });
            },
            //關鍵評論網 970250
            thenewslens_970250: function (data) {
                var $ = cheerio.load(data);
                $("#div-gpt-ad-1516246245198-3").children().remove();
                $("#div-gpt-ad-1516246245198-3").append('<div style="text-align: center;"><ins class="clickforceads" style="display:inline-block;width:970px;height:250px;" data-ad-zone="7965"></ins><script async type="text/javascript" src="//cdn.doublemax.net/js/init.js"></script></div>');
                fs.writeFile('./public/store/thenewslens_970250/' + socketID + '/index.html', $.html(), function () {
                    console.log('callback thenewslens_970250')
                });
            },
            // 旅食樂 m 300250 
            nownews_m_300250: function (data) {
                var $ = cheerio.load(data);
                $(".etad").children().remove();
                $(".etad").append('<div style="text-align: center;"><ins class="clickforceads" style="display:inline-block;width:300px;height:250px;" data-ad-zone="7930"></ins><script async type="text/javascript" src="//cdn.doublemax.net/js/init.js"></script></div>');

                fs.writeFile('./public/store/nownews_m_300250/' + socketID + '/index.html', $.html(), function () {
                    console.log('callback nownews_m_300250')
                });
            },
            // 旅食樂 m 32050 
            nownews_m_32050: function (data) {
                var $ = cheerio.load(data);
                $("#main-content > div > div.container > div > div").children().remove();
                $("#main-content > div > div.container > div > div").append('<div style="text-align: center;"><ins class="clickforceads" style="display:inline-block;width:320px;height:50px;" data-ad-zone="4214"></ins><script async type="text/javascript" src="//cdn.doublemax.net/js/init.js"></script></div>');

                fs.writeFile('./public/store/nownews_m_32050/' + socketID + '/index.html', $.html(), function () {
                    console.log('callback nownews_m_32050')
                });
            },
            // 女生集合 300250
            tagsis_300250: function (data) {
                var $ = cheerio.load(data);
                // $("#content-container > div.article-container > div.ads-box.center").children().remove();
                // $("#content-container > div.article-container > div.ads-box.center").append('<div style="text-align: center;"><ins class="clickforceads" style="display:inline-block;width:300px;height:250px;" data-ad-zone="7930"></ins><script async type="text/javascript" src="//cdn.doublemax.net/js/init.js"></script></div>');
                $("#content-container > div.article-container > div.ads-box.ads-728.center").empty();
                $("#content-container > div.article-container > div.ads-box.center").empty();
                $('<div style="text-align: center;"><ins class="clickforceads" style="display:inline-block;width:300px;height:250px;" data-ad-zone="7930"></ins><script async type="text/javascript" src="//cdn.doublemax.net/js/init.js"></script></div>').insertBefore("#content-container > div.article-container");
                fs.writeFile('./public/store/tagsis_300250/' + socketID + '/index.html', $.html(), function () {
                    console.log('callback tagsis_300250')
                });
            },
            // Bella濃濃 728 90
            bella_72890: function (data) {
                var $ = cheerio.load(data);
                $("#page-content-wrapper > div:nth-child(20) > div > div.hide-mobile").children().remove();
                $("#page-content-wrapper > div:nth-child(20) > div > div.hide-mobile").append('<ins class="clickforceads" style="display:inline-block;width:728px;height:90px;" data-ad-zone="2888"></ins><script async type="text/javascript" src="//cdn.doublemax.net/js/init.js"></script>');

                fs.writeFile('./public/store/bella_72890/' + socketID + '/index.html', $.html(), function () {
                    console.log('callback bella_72890')
                });
            },
            // 卡提諾 320 480 蓋板
            ck101_m_320480: function (data) {
                var $ = cheerio.load(data);
                $("#div-gpt-ad-8255481-1").children().remove();
                $("#div-gpt-ad-8255481-1").append('<ins class="clickforceads" style="display:inline-block;width:320px;height:480px;left:0;top:0;" data-ad-zone="8107"></ins><script async type="text/javascript" src="//cdn.doublemax.net/js/init.js"></script>')
                $("#ck_custom_1337 > div > div").children().remove();
                $("#ck_custom_1337 > div > div").append('<ins class="clickforceads" style="display:inline-block;width:320px;height:480px;left:0;top:0;" data-ad-zone="8107"></ins><script async type="text/javascript" src="//cdn.doublemax.net/js/init.js"></script>')

                fs.writeFile('./public/store/ck101_m_320480/' + socketID + '/index.html', $.html(), function () {
                    console.log('callback ck101_m_320480')
                });
            },
            // Pre Roll Test
            prerolltest: function (data) {
                var $ = cheerio.load(data);
                $("#playerContainer").children().remove();
                $("#nlplayerhtml5").remove();
                $("script[src='js/videoplayer.js']").remove();
                $("#playerContainer").css('text-align', 'center');
                // $("#playerContainer").append('<script>function afterClickforceVad(){alert("Hello")}</script><div style="position: fixed;width:300px;height:300px;display:inline-block;vertical-align:baseline;"><ins class="clickforcepreroll" data-ad-zone="8251" data-ad-width="100%" data-ad-height="100%"></ins><script type="text/javascript" src="//cdn.doublemax.net/js/cfvast.js"></script></div>')
                $("#playerContainer").append('<script>function afterClickforceVad(){alert("Hello")}</script><div style="width:960px;height:540px;display:inline-block;vertical-align:baseline;"><ins class="clickforcepreroll" data-ad-zone="8251" data-ad-width="100%" data-ad-height="100%"></ins><script type="text/javascript" src="//cdn.doublemax.net/js/cfvast.js"></script></div>')

                fs.writeFile('./public/store/prerolltest/' + socketID + '/index.html', $.html(), function () {
                    console.log('callback prerolltest')
                });
            },
            // yahoo_ 內文全屏
            yahoo_m_scroller: function (data) {
                var $ = cheerio.load(data);
                $('<div style="width:100%;text-align:center;"><ins class="clickforceads" style="display:inline-block;width:4px;height:7px;" data-ad-zone="8264"></ins><script async type="text/javascript" src="//cdn.doublemax.net/js/init.js"></script></div>').insertBefore("#main-5-ContentStream > ul > li:nth-child(3)");
                fs.writeFile('./public/store/yahoo_m_scroller/' + socketID + '/index.html', $.html(), function () {
                    console.log('callback yahoo_m_scroller')
                });
            },
            //痞客幫 手機蓋板 320480
            pixnet_m_320480: function (data) {
                var $ = cheerio.load(data);

                $('<link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet"><div style="position:fixed;width:100%;height:100%;text-align: center;background-color: rgba(111, 111, 111, 0.5);z-index: 99999999;"><div style="display: inline-block;"><div style="height:50px"></div><div style="position:absolute;background-color:rgba(50,50,50,0.5);width: 45px;height: 45px;border-radius: 30px; margin-left:275px;margin-top: 24px;"><p style="font-size: 28px;font-family: Nunito, sans-serif;color: white;margin-top: 5px;">X</p></div><ins class="clickforceads" style="display:inline-block;width:320px;height:480px;left:0;top:0;"data-ad-zone="8314"></ins><script async type="text/javascript" src="//cdn.doublemax.net/js/init.js"></script></div></div>').insertBefore("#main")
                fs.writeFile(path + socketID + '/index.html', $.html(), function () {
                    console.log('callback pixnet')
                });


            },
            //juksy 手機蓋板 320480
            juksy_m_320480: function (data) {
                var $ = cheerio.load(data);
                $('<div style="position:fixed;z-index: 99999;width: 100%;height: 100%;"><ins class="clickforceads" style="display:inline-block;width:320px;height:480px;left:0;top:0;" data-ad-zone="8314"></ins><script async type="text/javascript" src="//cdn.doublemax.net/js/init.js"></script></div>').insertBefore('body > main')
                fs.writeFile(path + socketID + '/index.html', $.html(), function () {
                    console.log('callback juksy')
                });
            },
            //三立 手機蓋板 320480
            setn_m_320480: function (data) {
                var $ = cheerio.load(data);
                $('#ad').children().remove();
                $("#ad").append('<ins class = "clickforceads"style = "display:inline-block;width:320px;height:480px;left:0;top:0;"data-ad-zone = "8107"> </ins> <script async type = "text/javascript"src = "//cdn.doublemax.net/js/init.js"></script>')
                fs.writeFile(path + socketID + '/index.html', $.html(), function () {
                    console.log('callback 三立')
                });
            },
        }
    }
}


module.exports = modifyhtml;