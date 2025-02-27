declare abstract class Forme {
    abstract calculerSurface(): number;
}
declare class Rectangle extends Forme {
    private largeur;
    private hauteur;
    constructor(largeur: number, hauteur: number);
    calculerSurface(): number;
}
declare class Cercle extends Forme {
    private rayon;
    constructor(rayon: number);
    calculerSurface(): number;
}
declare const rectangle: Rectangle;
declare const cercle: Cercle;
