// time data function
function currentTime() {
    //Declare variables
    var d = new Date(); //Get current date
    var hr = d.getHours(); //Get current hours
    var min = d.getMinutes(); //Get current minutes
    var sec = d.getSeconds(); //Get current seconds
    var ampm; //Declare empty variable to store AM or PM

    var utchr = d.getUTCHours(); //Get current Greenwich Mean Time (GMT)
    var timeDiff; //To store time difference between GMT hour and Local hour
    var adjTimeDiff; //To store time difference converted to positive number
    var timeZone; //To store the 4 time zones (PT, MT, CT, ET)

    if (sec < 10) {
        sec = "0" + sec; //Add leading zero to seconds
    }
    if (min < 10) {
        min = "0" + min; //Add leading zero to minutes
    }

    //Determine AM or PM string 
    if (hr == 12) {
        ampm = "PM"; //Set to PM
    } else if (hr > 12) {
        hr -= 12; //Deduct 12 from hours greater than 12 (military time)
        ampm = "PM"; //Set to PM
    } else {
        ampm = "AM"; //Set to AM
    }

    // Calculate time difference between local and UTC hours
    timeDiff = d.getHours() - utchr;

    // Adjust time difference to be within -12 to +12 range
    if (timeDiff > 12) {
        timeDiff -= 24;
    } else if (timeDiff < -12) {
        timeDiff += 24;
    }

    adjTimeDiff = Math.abs(timeDiff)  // Convert to positive for easier comparison

    // Determine the time zone
    if (adjTimeDiff == 7) {
        timeZone = "PT";  // Pacific Time
    } else if (adjTimeDiff == 6) {
        timeZone = "MT";  // Mountain Time
    } else if (adjTimeDiff == 5) {
        timeZone = "CT";  // Central Time
    } else if (adjTimeDiff == 4) {
        timeZone = "ET";  // Eastern Time
    } else {
        timeZone = "";  // Time zone cannot be determined
    }

    // Create displayable time format
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;
    document.getElementById("clock").innerText = time; //Display time
}
