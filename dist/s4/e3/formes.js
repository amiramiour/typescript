"use strict";
class Forme {
}
class Rectangle extends Forme {
    constructor(largeur, hauteur) {
        super();
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
    calculerSurface() {
        return this.largeur * this.hauteur;
    }
}
class Cercle extends Forme {
    constructor(rayon) {
        super();
        this.rayon = rayon;
    }
    calculerSurface() {
        return this.rayon * this.rayon * Math.PI;
    }
}
console.log('--- s4 e3 ---');
const rectangle = new Rectangle(10, 20);
console.log(rectangle.calculerSurface());
const cercle = new Cercle(5);
console.log(cercle.calculerSurface());
