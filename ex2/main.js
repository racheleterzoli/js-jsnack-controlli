alert("ora ti chiederò di inserire due parola e ti stamperò la più lunga. premi ok per inserire le due parole.");
var str = prompt("inserisci la prima parola:");
var paroladue = prompt("inserisci la seconda parola:");
var uno = parolauno.lenght;
 document.getElementById('stampa').innerHTML = uno;

if (parolauno > paroladue) {
}
    document.getElementById('stampa').innerHTML = 'La parola ' + parolauno + ' è più lunga!';
    document.getElementById('stampa').innerHTML = 'La parola ' + paroladue + ' è più corta!';

}
else if (paroladue > parolauno){
  document.getElementById('stampa').innerHTML = 'La parola ' + paroladue + ' è più lunga!';
  document.getElementById('stampa').innerHTML = 'La parola ' + parolauno + ' è più corta!';
}
else if (paroladue = parolauno){
  document.getElementById('stampa').innerHTML = 'Avete inserito due parole della stessa lunghezza.';
}
