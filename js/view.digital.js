"use strict";

export let digitalView= {

    init: function () {
        this.display = document.getElementById("digital");

    },

    update: function (time) {
        this.display.textContent = time.toLocaleTimeString();
    }
}