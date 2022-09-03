"use strict";
class Piece {
    constructor(name, x, y) {
        this.dx = 0;
        this.dy = 0;
        this.hasMoved = false;
        this.selected = false;
        this.name = name;
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
        if (newY === 0 && this.name === 1) {
            let input = prompt("Enter promotion value: (q)ueen, (r)ook, (k)night, (b)ishop (Default is Queen)");
            if (input === null)
                this.name = 5;
            else {
                let trueInput = input.toLowerCase();
                if (trueInput === 'r')
                    this.name = 4;
                else if (trueInput === 'b')
                    this.name = 3;
                else if (trueInput === 'k')
                    this.name = 2;
                else
                    this.name = 5;
            }
        }
    }
    move(e) {
        console.log(World.isWhiteTurn);
        this.selected = false;
        let newX = Math.floor(Functions.getMousePos(e).x / DevSettings.boxDimensions) - 1;
        let newY = Math.floor(Functions.getMousePos(e).y / DevSettings.boxDimensions) - 1;
        this.dx = 0;
        this.dy = 0;
        if (newX < 0 || newX >= 8 || newY < 0 || newY >= 8)
            return;
        if (Board.pieces[newY][newX] !== null)
            if (Board.pieces[newY][newX].name > 0)
                return;
        let check = true;
        if (this.name === -1)
            check = Move.validBlackPawnMove(this, newX, newY);
        if (this.name === 1)
            check = Move.validWhitePawnMove(this, newX, newY);
        if (this.name === 2 || this.name === -2)
            check = Move.validKnightMove(this, newX, newY);
        if (this.name === 3 || this.name === -3)
            check = Move.validBishopMove(this, newX, newY);
        if (this.name === 4 || this.name === -4)
            check = Move.validRookMove(this, newX, newY);
        if (this.name === 5 || this.name === -5)
            check = Move.validQueenMove(this, newX, newY);
        if (this.name === 6 || this.name === -6)
            check = Move.validKingMove(this, newX, newY);
        if (check) {
            if (Check.squareBeingAttackedByBlackPiece(newX, newY, Board.pieces) && this.name === 6)
                return;
            this.getPromotion(newY);
            Board.previousBoard = Functions.deepCopy(Board.pieces);
            this.hasMoved = true;
            let newBoard = Functions.deepCopy(Board.pieces);
            newBoard[this.y][this.x] = null;
            newBoard[newY][newX] = this;
            // Board.pieces = newBoard;
            FenHandling.fillBoardFromFEN(FenHandling.loadFENFromPosition(newBoard));
            this.x = newX;
            this.y = newY;
            Black.makeMove();
        }
    }
    getWhiteKing(board) {
        for (let array of board)
            for (let piece of array)
                if (piece !== null)
                    if (piece.name === 6)
                        return piece;
        throw new Error("White King not found");
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
Piece.numberToStringPieceIdentifier = new Map([
    [0, 'x'],
    [-1, 'p'],
    [-2, 'n'],
    [-3, 'b'],
    [-4, 'r'],
    [-5, 'q'],
    [-6, 'k'],
    [1, 'P'],
    [2, 'N'],
    [3, 'B'],
    [4, 'R'],
    [5, 'Q'],
    [6, 'K'],
]);
