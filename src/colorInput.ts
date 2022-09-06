class ColorInput {
    public static colorWell1: any = document.getElementById("colorWell1")!;
    public static colorWell2: any = document.getElementById("colorWell2")!;
    public static colorWell3: any = document.getElementById("colorWell3")!;

    public constructor() {
        ColorInput.colorWell1.addEventListener("change", this.watchColorPickerOnePicker, false);
        ColorInput.colorWell2.addEventListener("change", this.watchColorPickerTwoPicker, false);
        ColorInput.colorWell3.addEventListener("change", this.watchColorPickerThreePicker, false);
    }

    public watchColorPickerOnePicker(event: any) {
        ColorInput.colorWell1.style.color = event.target.value;
        UserSettings.whiteSquareColor = event.target.value;
    }

    public watchColorPickerTwoPicker(event: any) {
        ColorInput.colorWell1.style.color = event.target.value;
        UserSettings.blackSquareColor = event.target.value;
    }

    public watchColorPickerThreePicker(event: any) {
        ColorInput.colorWell3.style.color = event.target.value;
        World.canvas.style.backgroundColor = event.target.value;
    }
}