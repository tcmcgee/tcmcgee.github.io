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
	setTimeout("$('.name').append('T');document.getElementById('click_noise1').play();",100);
	setTimeout("$('.name').append('o');document.getElementById('click_noise3').play();",400);
	setTimeout("$('.name').append('m');document.getElementById('click_noise1').play();",800);
	setTimeout("$('.name').append(' ');document.getElementById('click_noise2').play();",1200);
	setTimeout("$('.name').append('M');document.getElementById('click_noise3').play();",1400);
	setTimeout("$('.name').append('c');document.getElementById('click_noise1').play();",1900);
	setTimeout("$('.name').append('G');document.getElementById('click_noise3').play();",2200);
	setTimeout("$('.name').append('e');document.getElementById('click_noise4').play();",2500);
	setTimeout("$('.name').append('e');document.getElementById('click_noise4').play();",2700);
	//$('.filler').delay(2900).fadeOut(100);

}
function blinker(){
$(".blinker").fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200);
}
function animateName()
{
	var name = 'Tom McGee'

	moveRight();
}