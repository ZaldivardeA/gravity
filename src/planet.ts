import { xyValue } from "./types";

const G: number = .001;

const getDistance = (distanceX: number, distanceY: number): number => {
  let distance2 = (distanceX ** 2) + (distanceY ** 2);
  return Math.sqrt(distance2);
}

const getTotalForce = (distance: number,
                       mass1: number,
                       mass2: number,
                       constant: number): number => {
  return (constant * mass1 * mass2) / (distance ** 2);
}

const getAngle = (distanceX: number, distanceY: number): number => {
  return Math.atan2(distanceY, distanceX);
}

export class Planet {
  public mass: number;
  private density: number;

  public position: xyValue;
  public force: xyValue;
  private velocity: xyValue;
  private acceleration: xyValue;

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

  public initForce = (): void => {
    this.force = { x:0, y:0 };
  }

  public addToForce = (otherPlanet: Planet): void => {
    if (this.position === otherPlanet.position) return;
    let distanceX = otherPlanet.position.x - this.position.x;
    let distanceY = otherPlanet.position.y - this.position.y;
    let distance: number = getDistance(distanceX, distanceY);
    let totalForce: number = getTotalForce(distance,
                                           this.mass,
                                           otherPlanet.mass,
                                           G);
    let angle: number = getAngle(distanceX, distanceY);
    let forceX: number = totalForce * Math.cos(angle);
    let forceY: number = totalForce * Math.sin(angle);
    this.force.x += forceX;
    this.force.y += forceY;
    otherPlanet.force.x -= forceX;
    otherPlanet.force.y -= forceY;
  }

  private calculateAcceleration = (): void => {
    this.acceleration.x = this.force.x / this.mass;
    this.acceleration.y = this.force.y / this.mass;
  }

  public move = (): void => {
    this.calculateAcceleration();
    this.velocity.x += this.acceleration.x;
    this.velocity.y += this.acceleration.y;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.initForce();
  }

}
