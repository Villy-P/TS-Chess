class Black {
    public static getBlackPieces(): number {
        let total: number = 0;
        for (let array of Board.pieces)
            for (let piece of array)
                if (piece !== null)
                    if (piece.name < 0)
                        total++;
        return total;
    }

    public static getKing(board: (Piece|null)[][]): Piece {
        for (let array of board)
            for (let piece of array)
                if (piece !== null)
                    if (piece.name == -6)
                        return piece;
        throw new Error("King not found");
    }

    public static getPromotion(piece: Piece, newY: number) {
        if (newY === 7 && piece.name === -1) {
            piece.name = 5;
        }
    }

    public static makeMove(board: (Piece|null)[][] | null = null): void {
        try {
            let blackPieces: number = Black.getBlackPieces();
            let lookingFor: number = Math.floor(Math.random() * (blackPieces - 1))
            let index: number = 0;
            let piecePick: Piece;
            fast:
            for (let array of Board.pieces)
                for (let piece of array)
                    if (piece !== null)
                        if (piece.name < 0) {
                            if (lookingFor === index) {
                                piecePick = piece;
                                break fast;
                            } 
                            index++;
                        }
            let xOffset: number;
            let yOffset: number;
            while (true) {
                xOffset = Functions.randomInteger(-4, 4);
                yOffset = Functions.randomInteger(-4, 4);
                if (piecePick!.x - xOffset < 0 || piecePick!.y + yOffset < 0 || piecePick!.x + xOffset > 7 || piecePick!.y + yOffset > 7)
                    continue;
                if (Board.pieces[piecePick!.y + yOffset][piecePick!.x + xOffset] === null)
                    break;
                if (Board.pieces[piecePick!.y + yOffset][piecePick!.x + xOffset] != null)
                    if (Board.pieces[piecePick!.y + yOffset][piecePick!.x + xOffset]!.name > 0)
                        break;
            }
            let check: boolean = true;
            if (piecePick!.name === -1)
                check = Move.validBlackPawnMove(piecePick!, piecePick!.x + xOffset, piecePick!.y + yOffset);
            if (piecePick!.name === -2)
                check = Move.validKnightMove(piecePick!, piecePick!.x + xOffset, piecePick!.y + yOffset);
            if (piecePick!.name === -3)
                check = Move.validBishopMove(piecePick!, piecePick!.x + xOffset, piecePick!.y + yOffset);
            if (piecePick!.name === -4)
                check = Move.validRookMove(piecePick!, piecePick!.x + xOffset, piecePick!.y + yOffset);
            if (piecePick!.name === -5)
                check = Move.validQueenMove(piecePick!, piecePick!.x + xOffset, piecePick!.y + yOffset);
            if (piecePick!.name === -6)
                check = Move.validKingMove(piecePick!, piecePick!.x + xOffset, piecePick!.y + yOffset);
            if (check) {
                Black.getPromotion(piecePick!, piecePick!.y + yOffset);
                let newBoard: (Piece|null)[][] = Functions.deepCopy(Board.pieces);
                newBoard[piecePick!.y][piecePick!.x] = null;
                newBoard[piecePick!.y + yOffset][piecePick!.x + xOffset] = piecePick!;
                let king: Piece = Black.getKing(newBoard);
                // Board.pieces = newBoard;
                if (Check.squareBeingAttackedByWhitePiece(king.x, king.y, Board.pieces)) {
                    console.log(Board.pieces)
                    Black.makeMove();
                }
                FenHandling.fillBoardFromFEN(FenHandling.loadFENFromPosition(newBoard));
                piecePick!.x = piecePick!.x + xOffset;
                piecePick!.y = piecePick!.y + yOffset;
            } else {
                Black.makeMove();
            }
        }  catch {
            Black.makeMove();
        }
    }
}