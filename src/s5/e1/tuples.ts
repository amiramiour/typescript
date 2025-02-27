function creerScore(score:[string, number]):[string, number]
{
    return score;
}
function afficherscore(score:[string, number]):void
{
    console.log("Le joueur "+score[0]+ " a un score de "+score[1]);
}

console.log('--- s5 e1 ---')
afficherscore(creerScore(["toto", 10]));