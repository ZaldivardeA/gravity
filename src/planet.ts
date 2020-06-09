import { xyValue } from "./types";

export class Planet {
  private mass: number;
  private density: number;

  private position: xyValue;
  private velocity: xyValue;
  private acceleration: xyValue;
  private force: xyValue;

  constructor(mass: number,
              density: number,
              position: xyValue,
              velocity: xyValue) {
    this.mass = mass;
    this.density = density;
    this.position = position;
    this.velocity = velocity;
    this.acceleration = {
      x: 0,
      y: 0
    };
    this.force = {
      x: 0,
      y: 0
    };
  }

  public draw = (context: CanvasRenderingContext2D): void => {
    context.moveTo(this.position.x, this.position.y);
    context.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI, false);
    context.fillStyle = 'green';
  }

  public move = (): void => {
    this.position.x += 1;
    this.position.y += 1;
  }

}
