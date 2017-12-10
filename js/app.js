var lives = 14;
var letters = [];
var counter =0;
var word=[];
var count =0;
var score=0;
var guessed = [];
var randomizer= Math.floor(Math.random()*5);
var puzzle =[{
  title:"Shark",
  letters:["s","h","a","r","k"],
  picture:"images/shark.png",
  hint:"The king of sea"
},
{
  title:"Voldemort",
  letters:["v","o","l","d","e","m","o","r","t"],
  picture:"images/voldemort.png",
  hint:"The darkest most powerful wizard in the world"
},
{
  title:"Wario",
  letters:["w","a","r","i","o"],
  picture:"images/wario.gif",
  hint:"Mario's greedy rival"
},
{
  title:"Pixar",
  letters:["p","i","x","a","r"],
  picture:"images/bulb.png",
  hint:"The creators of Finding Nemo and Finding Dory"
},
{
  title:"Javascript",
  letters:["j","a","v","a","s","c","r","i","p","t"],
  picture:"images/javascript.png",
  hint:"Most powerful coding language"
}];
var i =0;
var puzzleLength = puzzle.length;



$(".hats").on("click",function(){
  $(".puzzle").empty();
    $(".life1").empty();
    $(".letter").empty();
    lives=+14;
startUp();
});

$(".terr").on("click",function(){
  $(".puzzle").empty();
    $(".life1").empty();
    $(".letter").empty();
    lives=+14;
startUp();
});
function startUp(){
  // MAKE JS
$(".guesser").empty();
  score=0;
    // MAKE JS
$(".hint").text(puzzle[randomizer].hint);
for(var i=0;i<puzzle[randomizer].letters.length;i++){
    // MAKE JS
  var letterInput = $("<h2>").text("_").addClass("letter letter"+i+" "+ puzzle[randomizer].letters[i]).appendTo(".puzzle").attr("letter",puzzle[randomizer].letters[i]);
  $(".letter").animate({opacity:1});
  $("."+puzzle[randomizer].letters[i]).animate({opacity:1});
}
$(".ins").animate({opacity:1});
$(".submit").animate({opacity:1});
$(".inputs").animate({opacity:1});
$(".puzzle").animate({opacity:1});
  // MAKE JS
$(".hats").attr("src","images/hats.png");
  // MAKE JS
$(".terr").hide();
hearts(lives);


}
function hearts(life){
  $(".life1").empty();
for(var i=0;i<life;i++){
    // MAKE JS
  var star= $("<img>").attr("src","images/stars.ico").addClass("life").appendTo(".life1").animate({width:"+=30%",height:"+=30%"},500);
}
}
$(".submit").on("click",function(){

checker();
});


function checker (){
  // MAKE JS
  var input = $("#answer").val();
  var currentWord = puzzle[randomizer].letters;
    var currentPic= puzzle[randomizer].picture
  console.log(currentWord);
  letterDisplay(input);
  for( var i =0; i<currentWord.length;i++){
    if(input === currentWord[i]){
      console.log("right");
        // MAKE JS
      $("."+input).text(input).addClass("letters");
      score++;


    }
}lives-=1;
hearts(lives);
                ending(score,currentWord.length,currentPic,lives);
}


function ending(score,length,puzzle,lives){

  if(score  == length){
  $(".hint").text("Nooooo how could you have know, click me to for a rematch");
    // MAKE JS
    $(".hats").attr("src",puzzle);
    $(".puzzle").animate({opacity:0});
      $(".ins").animate({opacity:0});
    alert("You won");
      // MAKE JS
    $("<button>").addClass("btn btn-danger reset").text("Reset").appendTo(".res");
  }
  if(lives === 0){
      // MAKE JS
    $(".hint").text("Haha you have been defeated, click me to challenge me again");
      // MAKE JS
    $(".hint").text(puzzle[randomizer].hint);
    alert("You have lost");
    $(".puzzle").animate({opacity:0});
      // MAKE JS
    $(".hats").attr("src",puzzle);
        $(".ins").animate({opacity:0});
          // MAKE JS
        $("<button>").addClass("btn btn-danger terr").text("Reset").appendTo(".res").animate({bottom:"+=400px"});
  }
}



function reset(){
  lives +=14;
  score =0;

  $(".letters").empty();
 $(".puzzle").animate({opacity:1});
 $(".reset").empty();
   // MAKE JS
 $(".hats").attr("images/hats.png").animate({width:"+=20px"});
 $(".ins").show();

}

function letterDisplay(letters){
$(".guesser").empty();
guessed.push(letters);
  // MAKE JS
var letter = $("<h3>").text(guessed).addClass("answers");
for(var i =0; i<letters.length;i++){
    // MAKE JS
  $(".guesser").append(letter);
}
}
