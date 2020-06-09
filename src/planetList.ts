import { Planet } from "./planet.js";

export class PlanetList {
  private planets: Planet[];

  constructor() {
    this.planets = [
      new Planet(100, 10, {x:100,y:100}, {x:.4,y:0}),
      new Planet(100000, 10, {x:500,y:500}, {x:0,y:0})
    ];
  }

  public processForces = (): void => {
    if (this.planets.length <= 1) return;
    for (let i = 0; i < this.planets.length - 1; i++) {
      for (let j = i + 1; j < this.planets.length; j++) {
        this.planets[i].addToForce(this.planets[j]);
      }
    }
  }

  public move = (): void => {
    for (let i = 0; i < this.planets.length; i++) {
      this.planets[i].move();
    }
  }

  public draw = (context: CanvasRenderingContext2D): void => {
    for (let i = 0; i < this.planets.length; i++) {
      this.planets[i].draw(context);
    }
  }

}
