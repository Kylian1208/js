// Exo 1
var a = 5;
console.log (a);

//exo 2 
var b = 4;
console.log (b + a);

//exo 3 
var chaine1="Bonjour";
console.log (chaine1);

//exo 4 
var chaine2="salut";
console.log (chaine2 +"\n"+ chaine1);

//exo 5
var z = 2;
var e = 7;
var c = z;
z = e;
e = c;
console.log (z + " " + e);

//exo 6 
var p = 30;
var m = 10;

if (p > m){
    console.log ("La variable p est plus grand que m");
} else if (p > m){
    console.log ("La variable p est plus grand que m");
  } else {
    console.log ("La variables sont égaux : p et m");
  }

//exo 7
var t = 50;
var o = 30;
function comparaison (t,o) {
    if (t > o){
        console.log ("La variable t est plus grand que o");
    } else if (t > o){
        console.log ("La variable t est plus grand que o");
      } else {
        console.log ("La variables sont égaux : t et o");
      }
}
comparaison (t,o);

//exo 8
var g = getRandomInt(100);
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  console.log (g)

//exo 9
for( i=0; i<10; i++){
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      console.log(getRandomInt(3));
}
//exo 10
