"use strict";
class Check {
    static squareBeingAttackedByBlackPiece(squareX, squareY, board) {
        for (const array of board)
            for (const piece of array)
                if (piece.value > 0)
                    switch (piece.value) {
                        case -1:
                            return Move.validBlackPawnCapture(piece, squareX, squareY);
                        case -2:
                            return Move.validKnightMove(piece, squareX, squareY);
                        case -3:
                            return Move.validBishopMove(piece, squareX, squareY);
                        case -4:
                            return Move.validRookMove(piece, squareX, squareY);
                        case -5:
                            return Move.validQueenMove(piece, squareX, squareY);
                        case -6:
                            return Move.validBlackKingMove(piece, squareX, squareY);
                    }
        return false;
    }
    static squareBeingAttackedByWhitePiece(squareX, squareY, board) {
        for (const array of board)
            for (const piece of array)
                if (piece.value > 0)
                    switch (piece.value) {
                        case 1:
                            return Move.validWhitePawnCapture(piece, squareX, squareY);
                        case 2:
                            return Move.validKnightMove(piece, squareX, squareY);
                        case 3:
                            return Move.validBishopMove(piece, squareX, squareY);
                        case 4:
                            return Move.validRookMove(piece, squareX, squareY);
                        case 5:
                            return Move.validQueenMove(piece, squareX, squareY);
                        case 6:
                            return Move.validWhiteKingMove(piece, squareX, squareY);
                    }
        return false;
    }
    static whiteKingInCheckMate() {
        let king = Piece.getKing(true, Board.pieces);
        if (!Check.squareBeingAttackedByBlackPiece(king.x, king.y, Board.pieces))
            return false;
        for (const array of Board.pieces) {
            for (const piece of array) {
                if (piece.value > 0) {
                    for (let i = 0; i < 8; i++) {
                        for (let j = 0; j < 8; j++) {
                            if (Piece.getValidMove(piece, j, i)) {
                                let newBoard = Functions.deepCopy(Board.pieces);
                                newBoard[j][i] = piece;
                                newBoard[piece.y][piece.x] = new Piece(0, piece.x, piece.y);
                                if (!Check.squareBeingAttackedByBlackPiece(king.x, king.y, newBoard))
                                    return false;
                            }
                        }
                    }
                }
            }
        }
        return true;
    }
    static blackKingInCheckMate() {
        let king = Piece.getKing(false, Board.pieces);
        if (!Check.squareBeingAttackedByWhitePiece(king.x, king.y, Board.pieces))
            return false;
        for (const array of Board.pieces) {
            for (const piece of array) {
                if (piece.value < 0) {
                    for (let i = 0; i < 8; i++) {
                        for (let j = 0; j < 8; j++) {
                            if (Piece.getValidMove(piece, i, j) && (Board.pieces[j][i].value >= 0)) {
                                const pieceCopy = Functions.deepCopy(piece);
                                const newBoard = Functions.deepCopy(Board.pieces);
                                newBoard[j][i] = pieceCopy;
                                newBoard[pieceCopy.y][pieceCopy.x] = new Piece(0, pieceCopy.x, pieceCopy.y);
                                pieceCopy.y = j;
                                pieceCopy.x = i;
                                console.log(newBoard);
                                let newKing = Piece.getKing(false, newBoard);
                                console.log(Check.squareBeingAttackedByWhitePiece(newKing.x, newKing.y, newBoard));
                                if (!Check.squareBeingAttackedByWhitePiece(newKing.x, newKing.y, newBoard))
                                    return false;
                            }
                        }
                    }
                }
            }
        }
        return true;
    }
}
