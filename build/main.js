import { PlanetList } from "./planetList.js";
class GameWindow {
    constructor() {
        this.pressEventHandler = (e) => {
            let mouseX = e.pageX;
            let mouseY = e.pageY;
            mouseX -= this.canvas.offsetLeft;
            mouseY -= this.canvas.offsetTop;
            console.log(mouseX, mouseY);
        };
        this.start = () => {
            this.createUserEvents();
            setInterval(this.run, 16);
        };
        this.run = () => {
            this.planets.processForces();
            this.planets.move();
            this.redraw();
        };
        let canvas = document.getElementById('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let context = canvas.getContext("2d");
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.strokeStyle = 'black';
        context.lineWidth = 1;
        this.canvas = canvas;
        this.context = context;
        this.planets = new PlanetList();
    }
    createUserEvents() {
        let canvas = this.canvas;
        canvas.addEventListener("mousedown", this.pressEventHandler);
    }
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    redraw() {
        this.clear();
        this.context.beginPath();
        this.planets.draw(this.context);
        this.context.fill();
    }
}
let game = new GameWindow();
game.start();
