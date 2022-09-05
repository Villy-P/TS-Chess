"use strict";
class Piece {
    constructor(value, x, y) {
        this.dx = 0;
        this.dy = 0;
        this.hasMoved = false;
        this.selected = false;
        this.value = value;
        this.x = x;
        this.y = y;
    }
    static getImageUrlFromFEN(fenUnit) {
        let url = UserSettings.fileBeginning;
        switch (fenUnit) {
            case 1:
                url += "WhitePawn";
                break;
            case -1:
                url += "BlackPawn";
                break;
            case 4:
                url += "WhiteRook";
                break;
            case -4:
                url += "BlackRook";
                break;
            case 2:
                url += "WhiteKnight";
                break;
            case -2:
                url += "BlackKnight";
                break;
            case 3:
                url += "WhiteBishop";
                break;
            case -3:
                url += "BlackBishop";
                break;
            case 5:
                url += "WhiteQueen";
                break;
            case -5:
                url += "BlackQueen";
                break;
            case 6:
                url += "WhiteKing";
                break;
            case -6:
                url += "BlackKing";
                break;
        }
        return url + ".png";
    }
    getPromotion(newY) {
        if (newY === 0 && this.value === 1) {
            let input = prompt("Enter promotion value: (q)ueen, (r)ook, (k)night, (b)ishop (Default is Queen)");
            if (input === null)
                this.value = 5;
            else {
                let trueInput = input.toLowerCase();
                if (trueInput === 'r')
                    this.value = 4;
                else if (trueInput === 'b')
                    this.value = 3;
                else if (trueInput === 'k')
                    this.value = 2;
                else
                    this.value = 5;
            }
        }
    }
    static getValidMove(piece, newX, newY) {
        switch (piece.value) {
            case 0:
                return false;
            case -1:
                return Move.validBlackPawnMove(piece, newX, newY);
            case 1:
                return Move.validWhitePawnMove(piece, newX, newY);
            case 2:
            case -2:
                return Move.validKnightMove(piece, newX, newY);
            case 3:
            case -3:
                return Move.validBishopMove(piece, newX, newY);
            case 4:
            case -4:
                return Move.validRookMove(piece, newX, newY);
            case 5:
            case -5:
                return Move.validQueenMove(piece, newX, newY);
            case 6:
            case -6:
                return Move.validWhiteKingMove(piece, newX, newY);
        }
        throw new Error("Pieces value is undefined");
    }
    move(e) {
        this.selected = false;
        let newX = Math.floor(Functions.getMousePos(e).x / DevSettings.boxDimensions) - 1;
        let newY = Math.floor(Functions.getMousePos(e).y / DevSettings.boxDimensions) - 1;
        this.dx = 0;
        this.dy = 0;
        if (newX < 0 || newX >= 8 || newY < 0 || newY >= 8)
            return;
        if (Board.pieces[newY][newX].value > 0)
            return;
        let check = Piece.getValidMove(this, newX, newY);
        if (check) {
            if (Check.squareBeingAttackedByBlackPiece(newX, newY, Board.pieces) && this.value === 6)
                return;
            this.getPromotion(newY);
            Board.previousBoard = Functions.deepCopy(Board.pieces);
            this.hasMoved = true;
            Board.pieces[newY][newX] = this;
            Board.pieces[this.y][this.x] = new Piece(0, this.x, this.y);
            this.x = newX;
            this.y = newY;
            if (Check.blackKingInCheckMate()) {
                alert("Black King is in checkmate. White has won the game!");
                return;
            }
            Black.makeMove();
            if (Check.whiteKingInCheckMate()) {
                alert("White King is in checkmate. Black has won the game!");
                return;
            }
        }
    }
    static getKing(isWhite, board) {
        let kingColor = isWhite ? 6 : -6;
        for (let array of board)
            for (let piece of array)
                if (piece.value === kingColor)
                    return piece;
        throw new Error("King not found");
    }
}
Piece.pieceIdentifiers = new Map([
    ['x', 0],
    ['p', -1],
    ['n', -2],
    ['b', -3],
    ['r', -4],
    ['q', -5],
    ['k', -6],
    ['P', 1],
    ['N', 2],
    ['B', 3],
    ['R', 4],
    ['Q', 5],
    ['K', 6]
]);
