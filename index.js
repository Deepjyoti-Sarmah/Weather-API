// api.openweathermap.org / data / 2.5 / weather ? q = Assam & appid = a9b1aba60aa2b98f0a0e3db0ce1b734b

const curDate = document.getElementById("date");
let weathercon = document.getElementById("weathercon");

const tempStatus = "{%tempstatus%}";

//condition to check sunny or cloudy
if (tempStatus == "Sunny") {
    weathercon.innerHTML =
        "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
} else if (tempStatus == "Clouds") {
    weathercon.innerHTML =
        "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
} else if (tempStatus == "Rainy") {
    weathercon.innerHTML =
        "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
} else {
    weathercon.innerHTML =
        "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
}

const getCurrentDay = () => {
    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
    let currentTime = new Date();
    let day = (weekday[currentTime.getDay()]);

    return day;
};

const getcurrentTime = () => {

    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "jun",
        "jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    var now = new Date();
    var month = months[now.getMonth()];
    var date = now.getDate();

    let hours = now.getHours();
    let mins = now.getMinutes();

    let periods = "AM";

    if (hours > 11) {
        periods = "PM";
        if (hours > 12) hours -= 12;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }

    return `${month}  ${date} | ${hours}:${mins}${periods}`;
};

curDate.innerHTML = getCurrentDay() + " | " + getcurrentTime();