"use strict";
class ColorInput {
    constructor() {
        ColorInput.colorWell1.addEventListener("change", this.watchColorPickerOnePicker);
        ColorInput.colorWell2.addEventListener("change", this.watchColorPickerTwoPicker);
        ColorInput.colorWell3.addEventListener("change", this.watchColorPickerThreePicker);
        ColorInput.colorWell4.addEventListener("change", this.watchColorPickerFourPicker);
        ColorInput.colorWell5.addEventListener("change", this.watchColorPickerFivePicker);
        ColorInput.colorWell6.addEventListener("change", this.watchColorPickerSixPicker);
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
    watchColorPickerFourPicker(event) {
        ColorInput.colorWell4.style.color = event.target.value;
        document.body.style.backgroundColor = event.target.value;
    }
    watchColorPickerFivePicker(event) {
        ColorInput.colorWell5.style.color = event.target.value;
        document.getElementById("header").style.backgroundColor = event.target.value;
    }
    watchColorPickerSixPicker(event) {
        ColorInput.colorWell6.style.color = event.target.value;
        World.history.canvas.style.backgroundColor = event.target.value;
    }
}
ColorInput.colorWell1 = document.getElementById("colorWell1");
ColorInput.colorWell2 = document.getElementById("colorWell2");
ColorInput.colorWell3 = document.getElementById("colorWell3");
ColorInput.colorWell4 = document.getElementById("colorWell4");
ColorInput.colorWell5 = document.getElementById("colorWell5");
ColorInput.colorWell6 = document.getElementById("colorWell6");
