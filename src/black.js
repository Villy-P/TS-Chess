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
        outer: while (true) {
            let lookingFor = Math.floor(Math.random() * (blackPieces - 1));
            let index = 0;
            let piecePick;
            fast: for (let array of Board.pieces)
                for (let piece of array)
                    if (piece.value < 0) {
                        if (lookingFor === index) {
                            piecePick = piece;
                            break fast;
                        }
                        index++;
                    }
            let xOffset;
            let yOffset;
            while (true) {
                try {
                    console.log("WOWEE");
                    xOffset = Functions.randomInteger(-4, 4);
                    yOffset = Functions.randomInteger(-4, 4);
                    if (piecePick.x + xOffset < 0 || piecePick.y + yOffset < 0 || piecePick.x + xOffset > 7 || piecePick.y + yOffset > 7)
                        continue;
                    break;
                }
                catch (_a) {
                    console.log("WOWWWW");
                    break outer;
                }
            }
            console.log("OH OPPSIES");
            let check = Piece.getValidMove(piecePick, piecePick.y + yOffset, piecePick.x + xOffset);
            if (check) {
                Black.getPromotion(piecePick, piecePick.y + yOffset);
                let newBoard = Functions.deepCopy(Board.pieces);
                newBoard[piecePick.y + yOffset][piecePick.x + xOffset] = piecePick;
                newBoard[piecePick.y][piecePick.x] = new Piece(0, piecePick.x, piecePick.y);
                let king = Piece.getKing(false, newBoard);
                // Board.pieces = newBoard;
                if (Check.squareBeingAttackedByWhitePiece(king.x, king.y, Board.pieces)) {
                    console.log(Board.pieces);
                    continue;
                }
                FenHandling.fillBoardFromFEN(FenHandling.loadFENFromPosition(newBoard));
                piecePick.x = piecePick.x + xOffset;
                piecePick.y = piecePick.y + yOffset;
                return;
            }
            else {
                continue;
            }
        }
    }
}
