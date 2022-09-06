"use strict";
class ColorInput {
    constructor() {
        ColorInput.colorWell1.addEventListener("change", this.watchColorPickerOnePicker, false);
        ColorInput.colorWell2.addEventListener("change", this.watchColorPickerTwoPicker, false);
        ColorInput.colorWell3.addEventListener("change", this.watchColorPickerThreePicker, false);
    }
    watchColorPickerOnePicker(event) {
        ColorInput.colorWell1.style.color = event.target.value;
        UserSettings.whiteSquareColor = event.target.value;
    }
    watchColorPickerTwoPicker(event) {
        ColorInput.colorWell1.style.color = event.target.value;
        UserSettings.blackSquareColor = event.target.value;
    }
    watchColorPickerThreePicker(event) {
        ColorInput.colorWell3.style.color = event.target.value;
        World.canvas.style.backgroundColor = event.target.value;
    }
}
ColorInput.colorWell1 = document.getElementById("colorWell1");
ColorInput.colorWell2 = document.getElementById("colorWell2");
ColorInput.colorWell3 = document.getElementById("colorWell3");
