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
console.log('--- s5 e2 ---');
console.log(vecteurDirection(Direction.Nord));
console.log(vecteurDirection(Direction.Sud));
console.log(vecteurDirection(Direction.Est));
console.log(vecteurDirection(Direction.Ouest));
