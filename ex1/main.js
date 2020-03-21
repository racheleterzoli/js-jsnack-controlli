alert("ora ti chiederò di inserire due numeri e ti stamperò il più grande. premi ok per inserire i numeri.");
var numerouno = prompt("inserisci il primo numero:");
var numerodue = prompt("inserisci il secondo numero:");
if (numerouno > numerodue) {
    document.getElementById('stampa').innerHTML = 'Il numero ' + numerouno + ' è più grande!';
}
else if (numerodue > numerouno){
  document.getElementById('stampa').innerHTML = 'Il numero ' + numerodue + ' è più grande!';
}
else{
  document.getElementById('stampa').innerHTML = 'Avete inserito lo stesso valore.';
}
