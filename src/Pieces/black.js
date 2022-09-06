"use strict";
class Black {
    static getNumberOfBlackPieces() {
        let total = 0;
        for (let array of Board.pieces)
            for (let piece of array)
                if (piece !== null)
                    if (piece.value < 0)
                        total++;
        return total;
    }
    static getPromotion(piece, newY) {
        if (newY === 7 && piece.value === -1) {
            piece.value = 5;
        }
    }
    static makeMove() {
        let blackPieces = Black.getNumberOfBlackPieces();
        while (true) {
            break;
        }
    }
}
