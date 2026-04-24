"use strict";

export let analogueView = {
    init: function() {
        let clock = document.getElementById("analagoue");

        this.secondClock = document.createElement("div");
        this.secondClock.style = "position: absolute; bottom: 50%; left: 49%; width: 2%; height: 45%; background: red; transform-origin: bottom;";

        this.minuteClock = document.createElement("div");
        this.minuteClock.style = "position: absolute; bottom: 50%; left: 48.5%; width: 3%; height: 40%; background: black; transform-origin: bottom;";

        this.hourClock = document.createElement("div");
        this.hourClock.style = "position: absolute; bottom: 50%; left: 48%; width: 4%; height: 30%; background: black; transform-origin: bottom;";

        clock.append(this.hourClock, this.minuteClock, this.secondClock);
    },

    update: function(time) {
        let seconds = time.getSeconds();
        let minutes = time.getMinutes();
        let hours = time.getHours();

        let secondAngle = seconds * 6;
        let minuteAngle = minutes * 6;
        let hourAngle = (hours * 30) + (minutes * 0.5);

        this.secondClock.style.transform = "rotate(" + secondAngle + "deg)";
        this.minuteClock.style.transform = "rotate(" + minuteAngle + "deg)";
        this.hourClock.style.transform = "rotate(" + hourAngle + "deg)";
    }
};