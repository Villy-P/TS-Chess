"use strict";
class Check {
    static squareBeingAttackedByBlackPiece(squareX, squareY) {
        // Pawns
        if (squareX !== 0 && squareY !== 0)
            if (Board.pieces[squareY - 1][squareX - 1] != null)
                if (Board.pieces[squareY - 1][squareX - 1].name == -1)
                    return true;
        if (squareX !== 7 && squareY !== 0)
            if (Board.pieces[squareY - 1][squareX + 1] != null)
                if (Board.pieces[squareY - 1][squareX + 1].name == -1)
                    return true;
        // Knight
        if (squareY > 1 && squareX !== 7)
            if (squareY > 1 && squareX !== 7 && Board.pieces[squareY - 2][squareX + 1] != null)
                if (Board.pieces[squareY - 2][squareX + 1].name == -2)
                    return true;
        if (squareY > 1 && squareX !== 0)
            if (Board.pieces[squareY - 2][squareX - 1] != null)
                if (Board.pieces[squareY - 2][squareX - 1].name == -2)
                    return true;
        if (squareY < 6 && squareX !== 0)
            if (Board.pieces[squareY + 2][squareX - 1] != null)
                if (Board.pieces[squareY + 2][squareX + 1].name == -2)
                    return true;
        if (squareY < 6 && squareX !== 7)
            if (Board.pieces[squareY + 2][squareX + 1] != null)
                if (Board.pieces[squareY + 2][squareX + 1].name == -2)
                    return true;
        if (squareY < 7 && squareX < 6)
            if (Board.pieces[squareY + 1][squareX + 2] != null)
                if (Board.pieces[squareY + 1][squareX + 2].name == -2)
                    return true;
        if (squareY !== 0 && squareX !== 7)
            if (Board.pieces[squareY - 1][squareX + 2] != null)
                if (Board.pieces[squareY - 1][squareX + 2].name == -2)
                    return true;
        if (squareY !== 7 && squareX > 1)
            if (Board.pieces[squareY + 1][squareX - 2] != null)
                if (Board.pieces[squareY + 1][squareX - 2].name == -2)
                    return true;
        if (squareY !== 0 && squareX > 1)
            if (Board.pieces[squareY - 1][squareX - 2] != null)
                if (Board.pieces[squareY - 1][squareX - 2].name == -2)
                    return true;
        return false;
    }
}
