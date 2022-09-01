"use strict";
class Check {
    static squareBeingAttackedByBlackPiece(squareX, squareY) {
        for (const array of Board.pieces)
            for (const piece of array)
                if (piece != null)
                    if (piece.name < 0) {
                        if (piece.name === -1)
                            if (Move.validBlackPawnCapture(piece, squareX, squareY))
                                return true;
                        if (piece.name === -2)
                            if (Move.validKnightMove(piece, squareX, squareY))
                                return true;
                        if (piece.name === -3)
                            if (Move.validBishopMove(piece, squareX, squareY))
                                return true;
                        if (piece.name === -4)
                            if (Move.validRookMove(piece, squareX, squareY))
                                return true;
                        if (piece.name === -5)
                            if (Move.validQueenMove(piece, squareX, squareY))
                                return true;
                        if (piece.name === -6)
                            if (Move.validKingMove(piece, squareX, squareY))
                                return true;
                    }
        return false;
    }
    static squareBeingAttackedByWhitePiece(squareX, squareY) {
        for (const array of Board.pieces)
            for (const piece of array)
                if (piece != null)
                    if (piece.name > 0) {
                        if (piece.name === 1)
                            if (Move.validWhitePawnCapture(piece, squareX, squareY))
                                return true;
                        if (piece.name === 2)
                            if (Move.validKnightMove(piece, squareX, squareY))
                                return true;
                        if (piece.name === 3)
                            if (Move.validBishopMove(piece, squareX, squareY))
                                return true;
                        if (piece.name === 4)
                            if (Move.validRookMove(piece, squareX, squareY))
                                return true;
                        if (piece.name === 5)
                            if (Move.validQueenMove(piece, squareX, squareY))
                                return true;
                        if (piece.name === 6)
                            if (Move.validKingMove(piece, squareX, squareY))
                                return true;
                    }
        return false;
    }
}
