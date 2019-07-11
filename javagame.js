
var points = 0

function klik(){
  var kleuren = ['blue','yellow', 'red']
  var fotos = {
    aas: "url('ace')",
    queen: "url('queen')",
    king: "url('king')",
  }

  fotos['aas'] // url voor foto's

  var random_een= Math.floor(Math.random() * 3); // random getal generaten
  var random_twee= Math.floor(Math.random() * 3); // random getal generaten


  var random_kleur = kleuren[random_een]  // aanroepen random kleur 0,1,2
  var random_kleur2= kleuren[random_twee]  // aanroepen random kleur 0,1,2

  document.getElementById('kaart1').style.background = "url('king.png')";
  console.log("ik ben geklikt");

    document.getElementById('kaart2').style.background = "url('ace.png')";
    console.log("ik heb op kaart2 geklikt");

        document.getElementById('kaart3').style.background = "url('queen.png')";
        console.log("ik heb op kaart3 geklikt");



if (random_een == random_twee) {
console.log("I won");
points++
}
console.log(points);
var punten = document.getElementById('punten');
punten.innerHTML = "Punten:" + points;
}



