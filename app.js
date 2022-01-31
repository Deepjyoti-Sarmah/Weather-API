const http = require("http");
const fs = require("fs");
var requests = require("requests");

const homeFile = fs.readFileSync("Home.html", "utf-8");

const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
    temperature = temperature.replace("{%location%}", orgVal.main.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);

    return temperature;

};

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests(
                'https://api.openweathermap.org/data/2.5/weather?q=Assam&appid=a9b1aba60aa2b98f0a0e3db0ce1b734b')
            .on('data', (chunk) => {

                const objdata = JSON.parse(chunk);
                const arrData = [objdata];
                // console.log(arrData[0].main.temp);
                const realTimeData = arrData.map((val) => replaceVal(homeFile, val)).join("");
                res.write(realTimeData);
                console.log(realTimeData);
            })
            .on('end', (err) => {
                if (err) return console.log('connection closed due to errors', err);
                res.end();
            });
    }
});


server.listen(8000, "127.0.0.1");