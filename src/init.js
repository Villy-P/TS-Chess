"use strict";
const world = new World();
async function main() {
    await Functions.loadImages();
    world.board.drawBoard();
}
main();
function run() {
    world.board.drawBoard();
    world.board.drawPieces();
    World.history.print();
}
setInterval(run, 33);
