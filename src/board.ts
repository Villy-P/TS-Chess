type validColors = "white" | "black";

class Board {
    public static pieces: (Piece|null)[][] = [];
    public static previousBoard: (Piece|null)[][];

    public static board: Piece[] = []; 
    public color: validColors;

    public constructor(color: validColors) {
        this.color = color; 
        FenHandling.fillBoardFromFEN(FenHandling.startWhiteFenString); 
    }

    public static createEmptyBoard(): void {
        for (let i = 0; i < 8; i++) {
            Board.pieces.push([
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
            ]);
        }
    }

    public drawNumbers(i: number, sideNumber: number): void {
        Functions.drawText(
            sideNumber.toString(), 
            DevSettings.numberLetterDimensions / 2, 
            (DevSettings.numberLetterDimensions * (i + 2)) - DevSettings.numberLetterDimensions / 2, 
            "black",
            "Arial", 
            20, 
            "middle", 
            "center"
        );
    }

    public drawLetters(j: number) {
        Functions.drawText(
            String.fromCharCode(j + 'A'.charCodeAt(0)).toLowerCase(),
            (DevSettings.numberLetterDimensions * (j + 2)) - DevSettings.numberLetterDimensions / 2,
            DevSettings.numberLetterDimensions / 2, 
            "black",
            "Arial", 
            20, 
            "middle", 
            "center"
        );
    }

    public drawBoard(): void {
        let sideNumber: number = 8;
        for (let file = 0; file < 8; file++) {
            this.drawNumbers(file, sideNumber);
            for (let rank = 0; rank < 8; rank++) {
                this.drawLetters(rank);
                const isLightSquare: boolean = (file + rank) % 2 != 0;
                const squareColor: string = isLightSquare ? UserSettings.whiteSquareColor : UserSettings.blackSquareColor;
                const xOffset: number = DevSettings.numberLetterDimensions + (file * DevSettings.boxDimensions);
                const yOffset: number = DevSettings.numberLetterDimensions + (rank * DevSettings.boxDimensions);
                Functions.drawRect(squareColor, xOffset, yOffset, DevSettings.boxDimensions, DevSettings.boxDimensions);
            }
            sideNumber--;
        }
        const xyPosition = DevSettings.numberLetterDimensions;
        const widthHeight = DevSettings.boxDimensions * 8;
        Functions.drawStrokeRect("black", xyPosition, xyPosition, widthHeight, widthHeight);
    }

    public drawPieces(): void {
        for (let file = 0; file < 8; file++) {
            for (let rank = 0; rank < 8; rank++) {
                const piece: Piece | null = Board.pieces[rank][file];
                if (piece !== null)
                    Functions.drawImage(
                        Piece.getImageUrlFromFEN(piece.name), 
                        (piece.x * (DevSettings.numberLetterDimensions + 1)) + DevSettings.numberLetterDimensions + piece.dx,
                        (piece.y * (DevSettings.numberLetterDimensions + 1)) + DevSettings.numberLetterDimensions + piece.dy,
                        DevSettings.pieceDimensions, 
                        DevSettings.pieceDimensions
                    );
            }
        }
    }
}