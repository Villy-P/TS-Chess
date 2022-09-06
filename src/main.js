"use strict";
class World {
    constructor() {
        this.board = new Board();
        World.canvas.width = (DevSettings.boxDimensions * 8) + DevSettings.numberLetterDimensions;
        World.canvas.height = (DevSettings.boxDimensions * 8) + DevSettings.numberLetterDimensions;
        World.canvas.onmousedown = KeyEvents.mouseDown;
        World.canvas.onmouseup = KeyEvents.mouseUp;
        World.canvas.onmousemove = KeyEvents.mouseMove;
    }
}
World.canvas = document.getElementById("canvas");
World.context = World.canvas.getContext("2d");
World.boundingClient = World.canvas.getBoundingClientRect();
World.offsetX = World.boundingClient.left;
World.offsetY = World.boundingClient.top;
World.colorPickers = new ColorInput();
World.drawCounter = 0;
World.dragging = false;
World.isWhiteTurn = true;
