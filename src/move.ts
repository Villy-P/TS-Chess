class Move {
    public static validWhitePawnMove(piece: Piece, newX: number, newY: number): boolean {
        if (newY !== 0 && newX !== 0) {
            if (piece.y - 1 == newY && piece.x - 1 == newX && Board.previousBoard[piece.y - 2][piece.x - 1].value != 0) {
                if (Board.previousBoard[piece.y - 2][piece.x - 1].value == -1) {
                    if (Board.pieces[newY + 1][newX].value < 0)
                        Board.pieces[newY + 1][newX].value = 0;
                    return true;
                }
            }
            if (piece.y - 1 == newY && piece.x + 1 == newX && Board.previousBoard[piece.y - 2][piece.x + 1].value != 0) {
                if (Board.previousBoard[piece.y - 2][piece.x + 1].value == -1) {
                    if (Board.pieces[newY + 1][newX].value < 0)
                        Board.pieces[newY + 1][newX].value = 0;
                    return true;
                }
            }
        }

        if (piece.y - 1 == newY && piece.x - 1 == newX && Board.pieces[piece.y - 1][piece.x - 1].value != 0)
            return true;
        if (piece.y - 1 == newY && piece.x + 1 == newX && Board.pieces[piece.y - 1][piece.x + 1].value != 0)
            return true;        

        if (piece.x !== newX) 
            return false;
        if (Board.pieces[piece.y - 1][piece.x].value != 0)
            return false;
        if (piece.y - 1 === newY)
            return true;
        if (piece.y - 2 == newY && newY == 4 && Board.pieces[piece.y - 2][piece.x].value === 0)
            return true;
        return false;
    }

    public static validBlackPawnMove(piece: Piece, newX: number, newY: number): boolean {
        if (newY !== 0 && newX !== 0) {
            if (piece.y + 1 == newY && piece.x + 1 == newX && Board.previousBoard[piece.y + 2][piece.x + 1].value != 0) {
                if (Board.previousBoard[piece.y + 2][piece.x + 1].value == 1) {
                    if (Board.pieces[newY - 1][newX].value > 0)
                        Board.pieces[newY - 1][newX].value = 0;
                    return true;
                }
            }
            if (piece.y + 1 == newY && piece.x - 1 == newX && Board.previousBoard[piece.y + 2][piece.x - 1].value != 0) {
                if (Board.previousBoard[piece.y + 2][newX].value == 1) {
                    if (Board.pieces[newY - 1][newX].value > 0)
                        Board.pieces[newY - 1][newX].value = 0;
                    return true;
                }
            }
        }

        if (piece.y + 1 == newY && piece.x + 1 == newX && Board.pieces[piece.y + 1][piece.x + 1].value != 0)
            return true;
        if (piece.y + 1 == newY && piece.x - 1 == newX && Board.pieces[piece.y + 1][piece.x - 1].value != 0)
            return true;
        
        if (piece.x !== newX)
            return false;
        if (Board.pieces[piece.y + 1][piece.x].value != 0)
            return false;
        if (piece.y + 1 === newY)
            return true;
        if (piece.y + 2 == newY && newY == 3 && Board.pieces[piece.y + 2][piece.x].value == 0)
            return true;
        return false;
    }

    public static validWhitePawnCapture(piece: Piece, newX: number, newY: number): boolean {
        if (piece.y - 1 == newY && piece.x - 1 == newX)
            return true;
        if (piece.y - 1 == newY && piece.x + 1 == newX)
            return true;       
        return false;
    }

    public static validBlackPawnCapture(piece: Piece, newX: number, newY: number): boolean {
        if (piece.y + 1 == newY && piece.x + 1 == newX)
            return true;
        if (piece.y + 1 == newY && piece.x - 1 == newX)
            return true;
        return false;
    }

    // Special thanks to Sam Protsenko at https://stackoverflow.com/questions/30007666/programming-chess-rook-movement
    public static validRookMove(piece: Piece, newX: number, newY: number) {
        if (piece.x !== newX && piece.y !== newY) 
            return false
        if (piece.y === newY) {
            if (piece.x < newX) {
                for (let i = piece.x + 1; i < newX; ++i) 
                    if (Board.pieces[piece.y][i].value != 0)
                        return false;
            } else {
                for (let i = piece.x - 1; i > newX; i--)
                    if (Board.pieces[piece.y][i].value != 0)
                        return false;
            }
        } else if (piece.x === newX) {
            if (piece.y < newY) {
                for (let i = piece.y + 1; i < newY; ++i)
                    if (Board.pieces[i][piece.x].value != 0)
                        return false;
            } else {
                for (let i = piece.y - 1; i > newY; i--)
                    if (Board.pieces[i][piece.x].value != 0)
                        return false
            }
        } else {
            return false;
        }
        return true;
    }

    public static validKnightMove(piece: Piece, newX: number, newY: number): boolean {
        if (piece.y - 2 === newY && (piece.x + 1 === newX || piece.x - 1 === newX))
            return true;
        if (piece.y + 2 === newY && (piece.x + 1 === newX || piece.x - 1 === newX))
            return true;
        if (piece.y - 1 === newY && (piece.x + 2 === newX || piece.x - 2 === newX))
            return true;
        if (piece.y + 1 === newY && (piece.x + 2 === newX || piece.x - 2 === newX))
            return true;
        return false;
    }

    public static validBishopMove(piece: Piece, newX: number, newY: number): boolean {
        // Down-Right
        if (newX > piece.x && newY > piece.y)
            for (let i = 1; i < Math.max(newX - piece.x, newY - piece.y); i++)
                if (Board.pieces[piece.y + i][piece.x + i].value != 0)
                    return false;
        // Up-Left
        if (newX < piece.x && newY < piece.y)
            for (let i = 1; i < Math.max(piece.x - newX, piece.y - newY); i++)
                if (Board.pieces[piece.y - i][piece.x - i].value != 0)
                    return false;
        // Down-Left
        if (newX < piece.x && newY > piece.y)
            for (let i = 1; i < Math.max(piece.x - newX, newY - piece.y); i++)
                if (Board.pieces[piece.y + i][piece.x - i].value != 0)
                    return false;
        // Up-Right
        if (newX > piece.x && newY < piece.y)
            for (let i = 1; i < Math.max(newX - piece.x, piece.y - newY); i++)
                if (Board.pieces[piece.y - i][piece.x + i].value != 0)
                    return false;
        // Special thanks to Andrew at https://stackoverflow.com/questions/4288729/implementing-rules-for-a-bishop-in-chess
        return Math.abs(newX - piece.x) == Math.abs(newY - piece.y);
    }

    // Made by copying rook and bishop functions
    public static validQueenMove(piece: Piece, newX: number, newY: number): boolean {
        if (piece.y === newY || piece.x === newX) {
            if (piece.y === newY) {
                if (piece.x < newX) {
                    for (let i = piece.x + 1; i < newX; ++i) 
                        if (Board.pieces[piece.y][i].value != 0)
                            return false;
                } else {
                    for (let i = piece.x - 1; i > newX; i--)
                        if (Board.pieces[piece.y][i].value != 0)
                            return false;
                }
            } else if (piece.x === newX) {
                if (piece.y < newY) {
                    for (let i = piece.y + 1; i < newY; ++i)
                        if (Board.pieces[i][piece.x].value != 0)
                            return false;
                } else {
                    for (let i = piece.y - 1; i > newY; i--)
                        if (Board.pieces[i][piece.x].value != 0)
                            return false
                }
            } else {
                return false;
            }
            return true;
        }
        if (newX > piece.x && newY > piece.y)
            for (let i = 1; i < Math.max(newX - piece.x, newY - piece.y); i++)
                if (Board.pieces[piece.y + i][piece.x + i].value != 0)
                    return false;
        // Up-Left
        if (newX < piece.x && newY < piece.y)
            for (let i = 1; i < Math.max(piece.x - newX, piece.y - newY); i++)
                if (Board.pieces[piece.y - i][piece.x - i].value != 0)
                    return false;
        // Down-Left
        if (newX < piece.x && newY > piece.y)
            for (let i = 1; i < Math.max(piece.x - newX, newY - piece.y); i++)
                if (Board.pieces[piece.y + i][piece.x - i].value != 0)
                    return false;
        // Up-Right
        if (newX > piece.x && newY < piece.y)
            for (let i = 1; i < Math.max(newX - piece.x, piece.y - newY); i++)
                if (Board.pieces[piece.y - i][piece.x + i].value != 0)
                    return false;
        return Math.abs(newX - piece.x) == Math.abs(newY - piece.y);
    }

    public static validKingMove(piece: Piece, newX: number, newY: number): boolean {
        if (newX > piece.x + 1 || newX < piece.x - 1 || newY > piece.y + 1 || newY < piece.y - 1)
            return false;
        return true;
    }
}