//navFunc
$( document ).ready(function() {
    $("#navBarLogo").click(function(){
        $(".navMenu").slideToggle();
    });
});

//slideFunc
let slideCounter = 0;
let slide = document.getElementsByClassName("slides");
let dots = document.getElementsByClassName("bullets");

$( document ).ready(function() {
    $(".slides").hide();
    $(slide[slideCounter]).show();
});

function bulletSlide(n) {
    slideCounter = n;
    $(".bullets.activeBullet").removeClass("activeBullet");
    $(dots[slideCounter]).addClass("activeBullet");

    $(".slides").hide();
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

$( document ).ready(function() {
    var forwardArrow = document.getElementById('forward3');
    forwardArrow.onclick = function () {
        let width = $(container2).width();
        document.getElementById('container3').scrollBy(width,0);
    };

    var back = document.getElementById('back3');
    back.onclick = function () {
    let width = $(container2).width();
    document.getElementById('container3').scrollBy(-width,0)
    };
});

//imageResponsivenessFunc
$( document ).ready(function() {
    $(".newArrivalCard img").hover(
        function() {
        $(this).animate({
            width:imgWidth + '0px'
        },'slow');
    });
});
