"use strict";
function traiterValeur(param) {
    if (typeof param === "string") {
        return param.length;
    }
    if (typeof param === "number") {
        return param * 2;
    }
}
console.log('--- s3 e1 ---');
console.log(traiterValeur("test"));
console.log(traiterValeur(3));
