

document.getElementById("n0").addEventListener("click", function () {
     var box1 = parseInt(document.getElementById("box1").value);
     var box2 = parseInt(document.getElementById("box2").value);
     var rezultat = box1 + box2;
     document.getElementById("box3").value = rezultat;
})

document.getElementById("n1").addEventListener("click", function () {
  var box4 = parseInt(document.getElementById("box4").value);
  var box5 = parseInt(document.getElementById("box5").value);
  var rezultat = box4 - box5;
  document.getElementById("box6").value = rezultat;
});
/* document.getElementById("n9").addEventListener("click", function(){
     var box7 = parseInt(document.getElementById("box7").value);
     var box8 = parseInt(document.getElementById("box8").value);
     var taSrednia = (box7 + box8) / 2;
     
     document.getElementById("box9").value = taSrednia;
})
 */


/* function () {
     if (box7.value != "" && box8.value != "") {
          var box7 = document.getElementById("box7").value;
          var box8 = document.getElementById("box8").value;
          var add = box7 + box8;
          document.getElementById("box9").innerHTML = add;
     }
} */