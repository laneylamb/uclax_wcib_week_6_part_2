console.log('Hello from js/scripts.js!');

let submitQ = document.getElementById("submitQ")
var result = "";

submitQ.onclick = function(){

  var powerScore = 0;
  var lemonScore = 0;
  var guavaScore =0;
  var pineappleScore=0;

//Question 1
  if(document.getElementById("power1").checked) {
    tropScore++;
  }
  if(document.getElementById("lemon1").checked) {
    natScore++;
  }
  if(document.getElementById("guava1").checked) {
    extScore++;
  }
  if(document.getElementById("pineapple1").checked) {
    powerScore++;
  }

  //Question 2
  if(document.getElementById("lemon2").checked) {
    tropScore++;
  }
  if(document.getElementById("guava2").checked) {
    natScore++;
  }
  if(document.getElementById("pineapple2").checked) {
    extScore++;
  }
  if(document.getElementById("power2").checked) {
    extScore++;
  }

  //Question 3
  if(document.getElementById("guava3").checked) {
    tropScore++;
  }
  if(document.getElementById("pineapple3").checked) {
    natScore++;
  }
  if(document.getElementById("power3").checked) {
    extScore++;
  }
  if(document.getElementById("lemon3").checked) {
    extScore++;
  }

  //Question 4
  if(document.getElementById("lemon4").checked) {
    tropScore++;
  }
  if(document.getElementById("power4").checked) {
    natScore++;
  }
  if(document.getElementById("guava4").checked) {
    extScore++;
  }
  if(document.getElementById("pineapple4").checked) {
    extScore++;
  }

//Find largest of the scores
  if(guavaScore>lemonScore && guavaScore>pineappleScore && guavaScore>powerScore)
  {
    result = "guava";
  }
  else if(lemonScore>guavaScore && lemonScore>pineappleScore && lemonScore>powerScore)
  {
    result = "lemon";
  }
  else if(pineappleScore>guavaScore && pineappleScore>lemonScore && pineappleScore>powerScore)
  {
    result = "pineapple";
  }
  else if(powerScore>guavaScore && powerScore>lemonScore && powerScore>pineappleScore)
  {
    result = "power";
  }
  else {
    result = "power";
  }

  $('#quizModalScrollable').modal('hide')
}

$('#quizModalScrollable').on('hidden.bs.modal', function () {
  // Load up a new modal...
  if (result != "") {
    $('#resultModalCenter').modal('show')
    var output = document.getElementById("result-display-here");
    output.innerHTML = "";
    var imgPath = "<img height=500 width=500 vertical-align:middle src=https://laneylamb.com/uclax_wcib_week_6_part_2/images/:result:.png>"
    imgPath = imgPath.replace(":result:", result);
    output.innerHTML= imgPath;
  }

})

closeModal.onclick = function(){
  result="";
  var lemonScore = 0;
  var gingerScore = 0;
  var pineappleScore =0;
  var powerScore =0;
}
