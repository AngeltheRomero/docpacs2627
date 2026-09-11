document.getElementById("gameCanvas"); {
    const gameCanvas = document.getElementById("gameCanvas");
    const ctx = gameCanvas.getContext("2d");
}

class Wall {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}