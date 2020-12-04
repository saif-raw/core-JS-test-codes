/**
 The function takes number of seconds as input and return an object with keys 
 hours
 minutes
 seconds
 The value corresponding to each key should be the conversion of seconds into correponding 
 time 
 */

const convertTime = (seconds) => {
    if (isNaN(seconds) || typeof seconds === "string" || seconds > 86400) {
        throw "Invalid Input";
    } else {
        let date = new Date(null);
        date.setSeconds(seconds);
        let time = date.toISOString().substr(11, 8).split(":");

        let intTime = time.map((time) => {
            return parseInt(time);
        });

        let timeObj = {

            hours: intTime[0],
            minutes: intTime[1],
            seconds: intTime[2],
        };

        return timeObj;
    }
};


// console.log(convertTime(3600));

// convertTime(3600);
// convertTime(7200);
// convertTime(60);


module.exports = convertTime;
