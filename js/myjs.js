function loadHeader()
{
	blinker();
	animateName();
}

function showWidgets()
{
	$('.clickables').delay(3200).fadeIn('slow');
	$('.description').delay(3200).fadeIn('slow');
}

function moveRight()
{
	$('.blinker').css('margin-left','-40px');
	$('.t').delay(500).fadeIn(100);
	$('.o').delay(800).fadeIn(100);
	$('.m').delay(1200).fadeIn(100);
	$('.space').delay(1300).fadeIn(100);
	$('.blinker').css('margin-left','0px');
	$('.m2').delay(1700).fadeIn(100);
	$('.c').delay(2100).fadeIn(100);
	$('.g').delay(2400).fadeIn(100);
	$('.e').delay(2700).fadeIn(100);
	$('.e2').delay(2900).fadeIn(100);
	$('.filler').delay(2900).fadeOut(100);
	
}
function blinker(){
$(".blinker").fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200);
}
function animateName()
{
	moveRight();
}