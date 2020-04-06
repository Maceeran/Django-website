var timeoutVal = 1000;
var interval;

function checkTime(){
    var date = new Date();
    
    //  Digital seconds
    var seconds = date.getSeconds();
    if (seconds<10){
        document.getElementById("seconds").innerHTML = '0' + seconds;
    } else {
        document.getElementById("seconds").innerHTML = seconds;
    };
    

    //  Digital minutes
    var minutes = date.getMinutes();
    if (minutes<10){
        document.getElementById("minutes").innerHTML = '0' + minutes;
    } else {
        document.getElementById("minutes").innerHTML = minutes;
    };

    // Digital hours
    var hours = date.getHours();
    if (hours<10){
        document.getElementById("hours").innerHTML = '0' + hours;
    } else {
        document.getElementById("hours").innerHTML = hours;
    };

    // Analog hour hand
    var degrees = hours * 30 + minutes * 0.5 + seconds * 0.00833;
    var transformStr = "rotateZ(" + degrees + "deg)";
    document.getElementById("hourHand").style.transform = transformStr;

    // Analog minute hand
    degrees = minutes * 6 + seconds * 0.1;
    var transformStr = "rotateZ(" + degrees + "deg)";
    document.getElementById("minuteHand").style.transform = transformStr;
    
    // Analog second hand
    degrees = seconds * 6;
    var transformStr = "rotateZ(" + degrees + "deg)";
    document.getElementById("secondHand").style.transform = transformStr;
    setTimeout(function(){
        degrees = seconds * 6 + 3;
        var transformStr = "rotateZ(" + degrees + "deg)";
        document.getElementById("secondHand").style.transform = transformStr;
    }, 500);
    
    // Digital date
    var day = date.getDay()
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("weekDay").innerHTML = weekday[day];

    var returnedDate;

    var day = date.getDate();
    if (day<10){
        returnedDate = "0" + day + '-';
    } else {
        returnedDate = day + '-';
    }

    var month = date.getMonth();
    month++;
    if (month<10){
        returnedDate += '0' + month + '-';
    } else {
        returnedDate += month + '-';
    }

    var year = date.getFullYear();
    returnedDate += year;

    document.getElementById("date").innerHTML = returnedDate;
};