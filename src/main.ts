import { Planet } from "./planet.js";

class GameWindow {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private planet: Planet;

  constructor() {
    let canvas = document.getElementById('canvas') as
                 HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d") as CanvasRenderingContext2D;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 1;

    this.canvas = canvas;
    this.context = context;
    this.planet = new Planet(10, 10, {x:0, y:0}, {x:0, y:0});
  }

  private createUserEvents() {
    let canvas = this.canvas;

    canvas.addEventListener("mousedown", this.pressEventHandler);
  }

  private clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private redraw() {
    this.clear();
    this.context.beginPath();
    this.planet.draw(this.context);
    this.context.fill();
  }

  private pressEventHandler = (e: MouseEvent) => {
    let mouseX = e.pageX;
    let mouseY = e.pageY;
    mouseX -= this.canvas.offsetLeft;
    mouseY -= this.canvas.offsetTop;
    console.log(mouseX, mouseY);
  }

  public start: () => void = () => {
    this.createUserEvents();
    setInterval(this.run, 16);
  }

  private run: () => void = () => {
    this.planet.move();
    this.redraw();
  }

}

let game: GameWindow = new GameWindow();
game.start();
