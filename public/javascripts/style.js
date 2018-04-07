document.addEventListener("DOMContentLoaded", function(event){
  animateDiv();
});

function makeNewPosition(){

    var h = $(window).height() - 300;
    var w = $(window).width() - 205;

    var corners = [[0,-100],[h,w],[0,w],[h,-100]]
    var randomCorner = Math.floor(Math.random() * 4);

    return corners[randomCorner];

}

function animateDiv(){
    var newq = makeNewPosition();
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
