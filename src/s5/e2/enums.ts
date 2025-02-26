enum Direction {Nord , Sud , Est , Ouest}
function vecteurDirection(direction: Direction): [number, number]{
    if(direction == Direction.Nord){
        return [0, 1];
    }
    if(direction == Direction.Sud){
        return [0, -1];
    }
    if(direction == Direction.Est){
        return [1, 0];
    }
    if(direction == Direction.Ouest){
        return [-1, 0];
    }
    return [0, 0];
}
console.log('--- s5 e2 ---');
console.log(vecteurDirection(Direction.Nord));
console.log(vecteurDirection(Direction.Sud));
console.log(vecteurDirection(Direction.Est));
console.log(vecteurDirection(Direction.Ouest));
