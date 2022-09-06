"use strict";
class Functions {
    static drawRect(color, x, y, width, height) {
        World.context.fillStyle = color;
        World.context.fillRect(x, y, width, height);
    }
    static drawStrokeRect(color, x, y, width, height) {
        World.context.strokeStyle = color;
        World.context.strokeRect(x, y, width, height);
    }
    static drawLine(x1, y1, x2, y2, width = .5, context) {
        context.beginPath();
        context.lineWidth = width;
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
    }
    static drawText(text, x, y, color = "black", font = "Arial", fontSize = 10, textBaseline = "left", textAlign = "left", context) {
        context.fillStyle = color;
        context.font = `${fontSize}px ${font}`;
        context.textBaseline = textBaseline;
        context.textAlign = textAlign;
        context.fillText(text, x, y);
    }
    static drawImage(src, x, y, width = 50, height = 50) {
        const image = Functions.images.get(src);
        World.context.drawImage(image, x, y, width, height);
    }
    static getMousePos(evt) {
        const rect = World.canvas.getBoundingClientRect();
        return {
            x: ((evt.clientX - rect.left) / (rect.right - rect.left)) * World.canvas.width,
            y: ((evt.clientY - rect.top) / (rect.bottom - rect.top)) * World.canvas.height,
        };
    }
    static extractKeyValue(obj, value) {
        return Object.keys(obj)[Object.values(obj).indexOf(value)];
    }
    static deepCopy(object) {
        return JSON.parse(JSON.stringify(object));
    }
    // Special thanks to Lior Elrom from https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    static randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    static async loadImages() {
        const imageLinks = [
            "images/Basic/BlackBishop.png",
            "images/Basic/BlackKing.png",
            "images/Basic/BlackKnight.png",
            "images/Basic/BlackPawn.png",
            "images/Basic/BlackQueen.png",
            "images/Basic/BlackRook.png",
            "images/Basic/WhiteBishop.png",
            "images/Basic/WhiteKing.png",
            "images/Basic/WhiteKnight.png",
            "images/Basic/WhitePawn.png",
            "images/Basic/WhiteQueen.png",
            "images/Basic/WhiteRook.png",
        ];
        let loadImage = async (link) => {
            const image = new Image();
            image.src = link;
            return new Promise((resolve) => {
                image.onload = async () => {
                    Functions.images.set(link, image);
                    resolve(true);
                };
            });
        };
        for (let i = 0; i < imageLinks.length; i++) {
            await loadImage(imageLinks[i]);
        }
    }
}
Functions.images = new Map();
