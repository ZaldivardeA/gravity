const G = 1;
const getDistance = (distanceX, distanceY) => {
    let distance2 = (Math.pow(distanceX, 2)) + (Math.pow(distanceY, 2));
    return Math.sqrt(distance2);
};
const getTotalForce = (distance, mass1, mass2, constant) => {
    return (constant * mass1 * mass2) / (Math.pow(distance, 2));
};
const getAngle = (distanceX, distanceY) => {
    return Math.atan2(distanceY, distanceX);
};
export class Planet {
    constructor(mass, density, position, velocity) {
        this.draw = (context) => {
            context.moveTo(this.position.x, this.position.y);
            context.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI, false);
            context.fillStyle = 'green';
        };
        this.initForce = () => {
            this.force = { x: 0, y: 0 };
        };
        this.addToForce = (otherPlanet) => {
            if (this.position === otherPlanet.position)
                return;
            let distanceX = otherPlanet.position.x - this.position.x;
            let distanceY = otherPlanet.position.y - this.position.y;
            let distance = getDistance(distanceX, distanceY);
            let totalForce = getTotalForce(distance, this.mass, otherPlanet.mass, G);
            let angle = getAngle(distanceX, distanceY);
            let forceX = totalForce * Math.cos(angle);
            let forceY = totalForce * Math.sin(angle);
            this.force.x += forceX;
            this.force.y += forceY;
            otherPlanet.force.x -= forceX;
            otherPlanet.force.y -= forceY;
        };
        this.calculateAcceleration = () => {
            this.acceleration.x = this.force.x / this.mass;
            this.acceleration.y = this.force.y / this.mass;
        };
        this.move = () => {
            this.calculateAcceleration();
            this.velocity.x += this.acceleration.x;
            this.velocity.y += this.acceleration.y;
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            this.initForce();
        };
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
}
