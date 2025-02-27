"use strict";
class Rectangle {
    constructor(largeur, hauteur) {
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
    calculerSurface() {
        return this.largeur * this.hauteur;
    }
}
class Cercle {
    constructor(rayon) {
        this.rayon = rayon;
    }
    calculerSurface() {
        return Math.PI * this.rayon * this.rayon;
    }
}
function afficherSurface(forme) {
    if (forme instanceof Rectangle) {
        console.log(forme.calculerSurface());
    }
    else if (forme instanceof Cercle) {
        console.log(forme.calculerSurface());
    }
}
console.log('--- s3 e2 ---');
afficherSurface(new Rectangle(2, 3));
afficherSurface(new Cercle(2));
