const world: World = new World();

async function main(): Promise<void> {
    await Functions.loadImages();
    world.board.drawBoard();
}

main();

function run() {
    world.board.drawBoard();
    world.board.drawPieces();
}

setInterval(run, 33);