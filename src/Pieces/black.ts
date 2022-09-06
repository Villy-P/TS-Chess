class Black {
    public static getNumberOfBlackPieces(): number {
        let total: number = 0;
        for (let array of Board.pieces)
            for (let piece of array)
                if (piece !== null)
                    if (piece.value < 0)
                        total++;
        return total;
    }

    public static getPromotion(piece: Piece, newY: number) {
        if (newY === 7 && piece.value === -1) {
            piece.value = 5;
        }
    }

    public static makeMove(): void {
        let blackPieces: number = Black.getNumberOfBlackPieces();
        while (true) {
            break;
        }
    }
}