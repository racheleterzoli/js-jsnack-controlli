alert("ora ti chiederò di inserire due parola e ti stamperò la più lunga. premi ok per inserire le due parole.");
var parolauno = prompt("inserisci la prima parola");
var paroladue = prompt("inserisci la seconda parola");
if (parolauno.length < paroladue.length) {
document.getElementById("stampa").innerHTML = "La parola " + parolauno + " é più corta ed è lunga " + parolauno.length + " caratteri, invece " + paroladue + " è più lunga ed è lunga " + paroladue.length + " caratteri" ;

}
 else if (paroladue.length < parolauno.length )  {
document.getElementById("stampa").innerHTML = "La parola " + paroladue + " é più corta ed è lunga " + paroladue.length + " caratteri, invece " + parolauno + " è più lunga ed è lunga " + parolauno.length + " caratteri" ;

}
else {
   document.getElementById("stampa").innerHTML = "Le parole hanno le stessa lunghezza. Sono lunghe " + parolauno.length + " caratteri" ;
}
