"use strict";
function creerScore(score) {
    return score;
}
function afficherscore(score) {
    console.log("Le joueur " + score[0] + " a un score de " + score[1]);
}
console.log('--- s5 e1 ---');
afficherscore(creerScore(["toto", 10]));
