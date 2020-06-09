export class Planet {
    constructor(mass, density, position, velocity) {
        this.draw = (context) => {
            context.moveTo(this.position.x, this.position.y);
            context.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI, false);
            context.fillStyle = 'green';
        };
        this.move = () => {
            this.position.x += 1;
            this.position.y += 1;
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
//# sourceMappingURL=planet.js.map