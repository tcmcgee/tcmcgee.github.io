function loadHeader()
{
	blinker();
	animateName();
}

function showWidgets()
{
	$('.clickables').delay(7000).fadeIn('slow');
}

function moveRight()
{
	$('.blinker').css('margin-left','-40px');
	$('.t').delay(1000).fadeIn(100);
	$('.o').delay(1500).fadeIn(100);
	$('.m').delay(2200).fadeIn(100);
	$('.space').delay(2700).fadeIn(100);
	$('.blinker').css('margin-left','0px');
	$('.m2').delay(4000).fadeIn(100);
	$('.c').delay(4700).fadeIn(100);
	$('.g').delay(5300).fadeIn(100);
	$('.e').delay(6000).fadeIn(100);
	$('.e2').delay(6300).fadeIn(100);
}
function blinker(){
$(".blinker").fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200);
}
function animateName()
{
	moveRight();
}