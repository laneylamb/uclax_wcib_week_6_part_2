console.log('Hello from js/scripts.js!');

let submit = document.getElementById("submit")
var result = "";

submit.onclick = function(){

  var powerScore = 0;
  var lemonScore = 0;
  var guavaScore = 0;
  var pineappleScore = 0;

//Question 1
  if(document.getElementById("power1").checked) {
    powerScore++;
  }
  if(document.getElementById("lemon1").checked) {
    lemonScore++;
  }
  if(document.getElementById("guava1").checked) {
    guavaScore++;
  }
  if(document.getElementById("pineapple1").checked) {
    pineappleScore++;
  }

  //Question 2
  if(document.getElementById("lemon2").checked) {
    lemonScore++;
  }
  if(document.getElementById("guava2").checked) {
    guavaScore++;
  }
  if(document.getElementById("pineapple2").checked) {
    pineappleScore++;
  }
  if(document.getElementById("power2").checked) {
    powerScore++;
  }

  //Question 3
  if(document.getElementById("guava3").checked) {
    guavaScore++;
  }
  if(document.getElementById("pineapple3").checked) {
    pineappleScore++;
  }
  if(document.getElementById("power3").checked) {
    powerScore++;
  }
  if(document.getElementById("lemon3").checked) {
    lemonScore++;
  }

  //Question 4
  if(document.getElementById("lemon4").checked) {
    lemonScore++;
  }
  if(document.getElementById("power4").checked) {
    powerScore++;
  }
  if(document.getElementById("guava4").checked) {
    guavaScore++;
  }
  if(document.getElementById("pineapple4").checked) {
    pineappleScore++;
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

  $("#quizModal").modal('hide')
}

$("#quizModal").on('hidden.bs.modal', function () {
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
