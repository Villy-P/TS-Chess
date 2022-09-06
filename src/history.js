"use strict";
class HistoryCanvas {
    constructor() {
        this.canvas = document.getElementById("historyCanvas");
        this.context = this.canvas.getContext("2d");
        this.components = [];
        this.canvas.width = 200;
        this.canvas.height = 0;
    }
    addComponent(component) {
        this.canvas.height += 20;
        this.components.push(component);
    }
    print() {
        Functions.drawLine(20, 0, 20, this.canvas.height, undefined, this.context);
        Functions.drawLine(110, 0, 110, this.canvas.height, undefined, this.context);
        for (let i = 1; i <= this.components.length; i++) {
            Functions.drawText(i + ":", 2, ((i) * 20 - 5), "black", "Arial", 6.5, undefined, undefined, this.context);
            Functions.drawLine(0, (i * 20), this.canvas.width, (i * 20), undefined, this.context);
        }
    }
}
