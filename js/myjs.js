function loadHeader()
{
	blinker();
	animateName();
}

function showWidgets()
{
	$('.clickables').delay(3000).fadeIn('slow');
}

function moveRight()
{
	$('.blinker').css('margin-left','-40px');
	$('.t').delay(500).fadeIn(100);
	$('.o').delay(800).fadeIn(100);
	$('.m').delay(1200).fadeIn(100);
	$('.space').delay(1300).fadeIn(100);
	$('.blinker').css('margin-left','0px');
	$('.m2').delay(1600).fadeIn(100);
	$('.c').delay(1900).fadeIn(100);
	$('.g').delay(2200).fadeIn(100);
	$('.e').delay(2500).fadeIn(100);
	$('.e2').delay(2600).fadeIn(100);
	$('.filler').delay(2600).fadeOut(100);
}
function blinker(){
$(".blinker").fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200);
}
function animateName()
{
	moveRight();
}