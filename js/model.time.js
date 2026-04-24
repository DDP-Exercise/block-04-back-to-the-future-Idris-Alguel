"use strict";

export let timeModel = {
    currentTime: new Date(),
    updateTime: function() {
        this.currentTime = new Date();
        return this.currentTime;
    },
    saveTime: function(time) {
        let timeString = this.currentTime.toString();
        localStorage.setItem("docBrownTime", timeString);

        alert ("Zeit wurde für Doc Brwon gespeichert")
    }
};