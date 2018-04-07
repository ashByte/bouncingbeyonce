document.addEventListener("DOMContentLoaded", function(event){
  animateDiv();

  document.getElementById("spaceMode").addEventListener("click", function(event){
    launchSpaceShip();
  });

});



function launchSpaceShip(){
  document.body.style.backgroundImage = "url('/imgs/space.gif')";
  document.body.style.color = "white";
  document.getElementById("spaceMode").style.visibility = "hidden";
  let audio = document.getElementById("music");
  audio.src = "/audio/stars.mp3";
  audio.currentTime = 0;
  audio.play();

  var element = document.getElementsByClassName("a");
  element[0].classList.add("a_rotate");

}

var allTheYonces = ['imgs/yonce1.png',
  'imgs/yonce2.png',
  'imgs/yonce3.png',
  'imgs/yonce4.png', 'imgs/bey-transparent.png'];

/*Gets a new Yonce*/
function changeYonce(){
  var newYonce = allTheYonces[Math.floor(Math.random() * 4)]
  document.getElementById("yonce").src = newYonce;
}

function makeNewPosition(){

    var h = $(window).height() - 300;
    var w = $(window).width() - 205;

    var corners = [[0,-100],[h,w],[0,w],[h,-100]]
    var randomCorner = Math.floor(Math.random() * 4);

    return corners[randomCorner];

}

function animateDiv(){
    var newq = makeNewPosition();
    changeYonce();
    var oldq = $('.a').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $('.a').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();
    });

};


function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    var speedModifier = 0.25;
    var speed = Math.ceil(greatest/speedModifier);
    return speed;

}
