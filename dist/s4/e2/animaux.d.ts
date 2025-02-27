interface IAnimal {
    nom: string;
    seDeplacer(): void;
}
declare class Animal implements IAnimal {
    nom: string;
    constructor(nom: string);
    seDeplacer(): void;
}
declare class Chien extends Animal {
    constructor(nom: string);
    seDeplacer(): void;
}
declare class Chat extends Animal {
    constructor(nom: string);
    seDeplacer(): void;
}
declare const chien: Chien;
declare const chat: Chat;
declare function faireSeDeplacer(animaux: IAnimal[]): void;
