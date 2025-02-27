"use strict";
function premierElement(arg) {
    if (arg.length === 0) {
        return undefined;
    }
    return arg[0];
}
const x = [1, 2, 3];
const y = ['a', 'b', 'c'];
const z = [{ a: 1, b: 2 }, { a: 3, b: 4 }, { a: 5, b: 6 }];
console.log('--- s2 e2 ---');
console.log(premierElement(x));
console.log(premierElement(y));
console.log(premierElement(z));
console.log(premierElement([]));
