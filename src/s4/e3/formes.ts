abstract class Forme {
    abstract calculerSurface(): number;
}

class Rectangle extends Forme {
    constructor(private largeur: number, private hauteur: number) {
        super();
    }

    calculerSurface(): number {
        return this.largeur * this.hauteur;
    }
}
class Cercle extends Forme {
    constructor(private rayon: number) {
        super();
    }

    calculerSurface(): number {
        return this.rayon * this.rayon * Math.PI;
    }
}

console.log('--- s4 e3 ---');

const rectangle = new Rectangle(10, 20);
console.log(rectangle.calculerSurface());
const cercle = new Cercle(5);
console.log(cercle.calculerSurface());