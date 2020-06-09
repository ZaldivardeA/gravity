export class PlanetList {
    constructor() {
        this.processForces = () => {
            if (this.planets.length <= 1)
                return;
            for (let i = 0; i < this.planets.length - 1; i++) {
                for (let j = i + 1; j < this.planets.length; j++) {
                    this.planets[i].addToForce(this.planets[j]);
                }
            }
        };
        this.move = () => {
            for (const planet of this.planets) {
                planet.move();
            }
        };
        this.draw = (context) => {
            for (const planet of this.planets) {
                planet.draw(context);
            }
        };
        this.planets = [];
    }
}
