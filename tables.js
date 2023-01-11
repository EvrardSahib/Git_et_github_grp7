class Tables{
    constructor(numero, nbPlaces, formeTable, positionTable) {
    this.numero = numero;
    this.nbPlaces = nbPlaces;
    this.formeTable = formeTable;
    this.positionTable = positionTable;
  }

}
let myCar1 = new Tables("", "", "", "");
numero = prompt("Entrer le numero de la table");
if(parseInt(numero)< 10){
    myCar1.numero = "00"+numero;
}else{
    myCar1.numero = "0"+numero;
}

myCar1.nbPlaces = prompt("Entrer le nombre de places");
myCar1.formeTable = prompt("Entrer la forme de la table");
myCar1.positionTable = prompt("Entrer la position de la table");

window.localStorage.setItem("numero", myCar1.numero);
window.localStorage.setItem("nbPlaces", myCar1.nbPlaces);
window.localStorage.setItem("formeTable", myCar1.formeTable);
window.localStorage.setItem("positionTable", myCar1.positionTable);
let num = window.localStorage.getItem("numero");
let nbP = window.localStorage.getItem("nbPlaces");
let forme = window.localStorage.getItem("formeTable");
let position = window.localStorage.getItem("positionTable");
document.write("Numero: "+num+ " ;Places: " +nbP+" ;Forme: "+forme+" ;Position: "+position);