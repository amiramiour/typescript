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



function deplacer(
    point: [number, number],
    direction: Direction
  ): [number, number] {
    const [dx, dy] = vecteurDirection(direction);
    return [point[0] + dx, point[1] + dy];
}
const point : [number, number]  = [5, 5];
console.log('--- s5 e3 ---');
console.log('point ' + point);
console.log('nouveaux points obtenus : ');

console.log('Nord ' + deplacer(point, Direction.Nord));
console.log('Sud ' + deplacer(point, Direction.Sud));
console.log('Est ' + deplacer(point, Direction.Est));
console.log('Ouest ' + deplacer(point, Direction.Ouest));