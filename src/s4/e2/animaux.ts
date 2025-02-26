interface IAnimal {
    nom : string;
     seDeplacer() : void;
}
class Animal implements IAnimal {
    constructor(public nom : string) {}
    seDeplacer() {
        console.log(`L'animal ${this.nom } se déplace`);
    }
}
class Chien extends Animal {
    constructor(nom : string) {
        super(nom);
    }
    seDeplacer(): void {
        console.log(`Le chien ${this.nom} court`);
    }
}
class Chat extends Animal {
    constructor(nom : string) {
        super(nom);
    }
    seDeplacer(): void {
        console.log(`Le chat ${this.nom} saute`);
    }
}
console.log('--- s4 e2 ---');

const chien = new Chien('ROX');
chien.seDeplacer();
const chat = new Chat('Hind');
chat.seDeplacer();


function faireSeDeplacer(animaux: IAnimal[]){
    animaux.forEach(animal => 
        animal.seDeplacer()
    );
}
console.log('--- s4 e2 --- faire se deplacer');

faireSeDeplacer([chien, chat]);