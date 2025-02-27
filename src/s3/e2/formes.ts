class Rectangle {
    constructor(private largeur: number, private hauteur: number) {}
    public calculerSurface() {
        return this.largeur * this.hauteur;
    }
}
class Cercle {
    constructor(private rayon: number) {}
    public calculerSurface() {
        return Math.PI * this.rayon * this.rayon;
    }
}
function afficherSurface(forme: Rectangle | Cercle): void {
    if(forme instanceof Rectangle){
        console.log(forme.calculerSurface());
    }
    else if(forme instanceof Cercle){
        console.log(forme.calculerSurface());
    }
}
console.log('--- s3 e2 ---');

afficherSurface(new Rectangle(2, 3));
afficherSurface(new Cercle(2));