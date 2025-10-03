/* Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo oppure in console la bici con peso minore. */

const bicycles = [
    { name: "Specialized S-Works Tarmac SL8", weight: 6 },
    { name: "Canyon Ultimate CFR", weight: 7 },
    { name: "Trek Émonda SLR 9", weight: 8 },
    { name: "Giant TCR Advanced SL 0", weight: 9 },
    { name: "BMC Teammachine SLR01", weight: 10 },
    { name: "Cervélo R5 Dura-Ace Di2", weight: 6 },
    { name: "Pinarello Dogma F", weight: 7 },
    { name: "Scott Addict RC Ultimate", weight: 6 },
    { name: "Colnago V4Rs", weight: 5 },
    { name: "Wilier Filante SLR", weight: 8 },

];


let lowerWeight;
for (let i = 0; i < bicycles.length; i++) {
    const curObject = bicycles[i];
    const weightObject = curObject.weight;
    if (weightObject < bicycles[0].weight) {
        lowerWeight = curObject;
    }
}

console.log(lowerWeight);


/* Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 */

const teams = [
    { name: "Napoli", points: 0, foulPlay: 0 },
    { name: "Inter", points: 0, foulPlay: 0 },
    { name: "Milan", points: 0, foulPlay: 0 },
    { name: "Juventus", points: 0, foulPlay: 0 }
];


let foulTeams = [];
for (let i = 0; i < teams.length; i++) {
    const curTeam = teams[i];
    curTeam.points = Math.floor(Math.random() * 10);
    curTeam.foulPlay = Math.floor(Math.random() * 10);
    foulTeams.push({ name: curTeam.name, foulPlay: curTeam.foulPlay })
}

console.log(teams, foulTeams);


/* Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Non usare i metodi di array di JS
 */

