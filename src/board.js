"use strict";
class Board {
    constructor(color) {
        this.color = color;
        FenHandling.fillBoardFromFEN(FenHandling.startWhiteFenString);
    }
    static createEmptyBoard() {
        for (let i = 0; i < 8; i++) {
            Board.pieces.push([
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
            ]);
        }
    }
    drawNumbers(i, sideNumber) {
        Functions.drawText(sideNumber.toString(), DevSettings.numberLetterDimensions / 2, (DevSettings.numberLetterDimensions * (i + 2)) - DevSettings.numberLetterDimensions / 2, "black", "Arial", 20, "middle", "center");
    }
    drawLetters(j) {
        Functions.drawText(String.fromCharCode(j + 'A'.charCodeAt(0)).toLowerCase(), (DevSettings.numberLetterDimensions * (j + 2)) - DevSettings.numberLetterDimensions / 2, DevSettings.numberLetterDimensions / 2, "black", "Arial", 20, "middle", "center");
    }
    drawBoard() {
        let sideNumber = 8;
        for (let file = 0; file < 8; file++) {
            this.drawNumbers(file, sideNumber);
            for (let rank = 0; rank < 8; rank++) {
                this.drawLetters(rank);
                const isLightSquare = (file + rank) % 2 != 0;
                const squareColor = isLightSquare ? UserSettings.whiteSquareColor : UserSettings.blackSquareColor;
                const xOffset = DevSettings.numberLetterDimensions + (file * DevSettings.boxDimensions);
                const yOffset = DevSettings.numberLetterDimensions + (rank * DevSettings.boxDimensions);
                Functions.drawRect(squareColor, xOffset, yOffset, DevSettings.boxDimensions, DevSettings.boxDimensions);
            }
            sideNumber--;
        }
        const xyPosition = DevSettings.numberLetterDimensions;
        const widthHeight = DevSettings.boxDimensions * 8;
        Functions.drawStrokeRect("black", xyPosition, xyPosition, widthHeight, widthHeight);
    }
    drawPieces() {
        for (let file = 0; file < 8; file++) {
            for (let rank = 0; rank < 8; rank++) {
                const piece = Board.pieces[rank][file];
                if (piece !== null)
                    Functions.drawImage(Piece.getImageUrlFromFEN(piece.name), (piece.x * (DevSettings.numberLetterDimensions + 1)) + DevSettings.numberLetterDimensions + piece.dx, (piece.y * (DevSettings.numberLetterDimensions + 1)) + DevSettings.numberLetterDimensions + piece.dy, DevSettings.pieceDimensions, DevSettings.pieceDimensions);
            }
        }
    }
}
Board.pieces = [];
Board.board = [];
