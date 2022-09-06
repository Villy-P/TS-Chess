"use strict";
// Special Thanks to SabLague on Github for most of this code. I translated it into TypeScript from C#
// You can find the code here: https://github.com/SebLague/Chess-AI/blob/main/Assets/Scripts/Core/FenUtility.cs
class FenHandling {
    // }
    static fillBoardFromFEN(fen) {
        Board.pieces = [];
        Board.createEmptyBoard();
        const FENSTRING = fen.split(' ');
        let file = 0;
        let rank = 0;
        for (const char of FENSTRING[0].split("")) {
            if (char === '/') {
                file = 0;
                rank++;
            }
            else {
                if (!Number.isNaN(Number(char))) {
                    file += parseInt(char);
                }
                else {
                    Board.pieces[rank][file] = new Piece(Piece.pieceIdentifiers.get(char), file, rank);
                    file++;
                }
            }
        }
    }
    static loadFENFromPosition(board) {
        let fen = "";
        for (const array of board) {
            let emptySquares = 0;
            for (const piece of array) {
                if (piece.value === 0) {
                    emptySquares++;
                }
                else {
                    if (emptySquares != 0) {
                        fen += emptySquares;
                        emptySquares = 0;
                    }
                    if (piece.value != 0)
                        fen += piece.value.toString();
                }
            }
            if (emptySquares != 0)
                fen += emptySquares;
            fen += '/';
        }
        fen = fen.slice(0, -1);
        fen += " w KQkq - 0 1";
        return fen;
    }
}
FenHandling.startWhiteFenString = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
