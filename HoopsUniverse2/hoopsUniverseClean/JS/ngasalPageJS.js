//navFunc
$( document ).ready(function() {
    $(".hamburger").click(function(){
        $(".navMenu").slideToggle();
    });
});

//slideFunc
let slideCounter = 0;
let slide = document.getElementsByClassName("slides");
let dots = document.getElementsByClassName("dot");
let eventTypes = document.getElementsByClassName("eventType");
let eventTitles = document.getElementsByClassName("eventTitle");
let eventPars = document.getElementsByClassName("eventPar");

$( document ).ready(function() {
    $(".slides").hide();
    $(slide[slideCounter]).show();

    $(".eventType").hide();
    $(".activeEventType").show();
    $(".eventTitle").hide();
    $(".activeEventTitle").show();
    $(".eventPar").hide();
    $(".activeEventPar").show();
});

function bulletSlide(n) {
    slideCounter = n;

    $(".dot.activeDot").removeClass("activeDot");
    $(dots[slideCounter]).addClass("activeDot");

    $(".eventType").hide();
    $(eventTypes[slideCounter]).fadeIn();
    $(".eventTitle").hide();
    $(eventTitles[slideCounter]).fadeIn();
    $(".eventPar").hide();
    $(eventPars[slideCounter]).fadeIn();

    $(".slides").hide();
    $(slide[slideCounter]).fadeIn();
}

function arrowSlide(n) {
    let past = slideCounter;
    slideCounter = slideCounter + n;
    if(slideCounter>3){
        slideCounter = 0;
    }
    else if(slideCounter<0){
        slideCounter = 3;
    }

    $(dots[past]).removeClass("activeDot");
    $(dots[slideCounter]).addClass("activeDot");

    $(".eventTitle").hide();
    $(eventTitles[slideCounter]).fadeIn();
    $(".eventType").hide();
    $(eventTypes[slideCounter]).fadeIn();
    $(".eventPar").hide();
    $(eventPars[slideCounter]).fadeIn();

    $(slide[past]).hide();
    $(slide[slideCounter]).fadeIn();
}


//scrollFunc
$( document ).ready(function() {
    var forwardArrow = document.getElementById('forward1');
    forwardArrow.onclick = function () {
        let width = $(container1).width();
        document.getElementById('container1').scrollBy(width,0);
    };

    var back = document.getElementById('back1');
    back.onclick = function () {
    let width = $(container1).width();
    document.getElementById('container1').scrollBy(-width,0)
    };
});

$( document ).ready(function() {
    var forwardArrow = document.getElementById('forward2');
    forwardArrow.onclick = function () {
        let width = $(container2).width();
        document.getElementById('container2').scrollBy(width,0);
    };

    var back = document.getElementById('back2');
    back.onclick = function () {
    let width = $(container2).width();
    document.getElementById('container2').scrollBy(-width,0)
    };
});

//cardHoverFunc
$( document ).ready(function() {
    $(".productCards").hover(function() {
            $(this).addClass("activeCard");
        },
        function() {
            $(this).removeClass("activeCard");
        }
    )
});



