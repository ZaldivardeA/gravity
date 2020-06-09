import { Planet } from "./planet";

export class PlanetList {
  private planets: Planet[];

  constructor() {
    this.planets = [];
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
    for (const planet of this.planets) {
      planet.move();
    }
  }

  public draw = (context: CanvasRenderingContext2D): void => {
    for (const planet of this.planets) {
      planet.draw(context);
    }
  }

}
