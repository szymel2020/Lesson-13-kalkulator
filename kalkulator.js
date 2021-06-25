document.getElementById("n0").addEventListener("click", function () {
     var box1 = parseInt(document.getElementById("box1").value);
     var box2 = parseInt(document.getElementById("box2").value);
     var rezultat = box1 + box2;
     document.getElementById("box3").value = rezultat;
})

