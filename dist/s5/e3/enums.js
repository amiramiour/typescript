"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Nord"] = 0] = "Nord";
    Direction[Direction["Sud"] = 1] = "Sud";
    Direction[Direction["Est"] = 2] = "Est";
    Direction[Direction["Ouest"] = 3] = "Ouest";
})(Direction || (Direction = {}));
function vecteurDirection(direction) {
    if (direction == Direction.Nord) {
        return [0, 1];
    }
    if (direction == Direction.Sud) {
        return [0, -1];
    }
    if (direction == Direction.Est) {
        return [1, 0];
    }
    if (direction == Direction.Ouest) {
        return [-1, 0];
    }
    return [0, 0];
}
function deplacer(point, direction) {
    const [dx, dy] = vecteurDirection(direction);
    return [point[0] + dx, point[1] + dy];
}
const point = [5, 5];
console.log('--- s5 e3 ---');
console.log('point ' + point);
console.log('nouveaux points obtenus : ');
console.log('Nord ' + deplacer(point, Direction.Nord));
console.log('Sud ' + deplacer(point, Direction.Sud));
console.log('Est ' + deplacer(point, Direction.Est));
console.log('Ouest ' + deplacer(point, Direction.Ouest));
