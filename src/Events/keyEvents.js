"use strict";
class KeyEvents {
    static mouseDown(e) {
        e.preventDefault();
        e.stopPropagation();
        this.lastX = Functions.getMousePos(e).x;
        this.lastY = Functions.getMousePos(e).y;
        const mouseX = Math.floor(Functions.getMousePos(e).x / DevSettings.boxDimensions) - 1;
        const mouseY = Math.floor(Functions.getMousePos(e).y / DevSettings.boxDimensions) - 1;
        dance: for (let file = 0; file < 8; file++)
            for (let rank = 0; rank < 8; rank++)
                if (file == mouseX && rank == mouseY) {
                    if (Board.pieces[rank][file].value > 0)
                        this.selectedPiece = Board.pieces[rank][file];
                    break dance; // hA hA hA hA hA hA hA hA hA hA hA hA hA hA hA hA hA hA hA hA hA hA hA hA
                }
        this.selectedPiece.selected = true;
        World.dragging = true;
        this.mouseIsDown = true;
    }
    static mouseUp(e) {
        if (!World.dragging)
            return;
        e.preventDefault();
        World.dragging = false;
        this.selectedPiece.move(e);
        this.selectedPiece = null;
    }
    static mouseMove(e) {
        if (!World.dragging)
            return;
        e.preventDefault();
        const mouseX = Functions.getMousePos(e).x;
        const mouseY = Functions.getMousePos(e).y;
        this.selectedPiece.dx = mouseX - this.lastX;
        this.selectedPiece.dy = mouseY - this.lastY;
    }
}
KeyEvents.lastY = 0;
KeyEvents.lastX = 0;
KeyEvents.mouseIsDown = false;
