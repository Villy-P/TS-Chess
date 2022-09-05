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
                            return Move.validKingMove(piece, squareX, squareY);
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
                            return Move.validKingMove(piece, squareX, squareY);
                    }
        return false;
    }
}
