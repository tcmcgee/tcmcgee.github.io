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
	setTimeout("$('.name').append('T');",100);
	setTimeout("$('.name').append('o');",400);
	setTimeout("$('.name').append('m');",800);
	setTimeout("$('.name').append(' ');",1200);
	setTimeout("$('.name').append('M');",1400);
	setTimeout("$('.name').append('c');",1900);
	setTimeout("$('.name').append('G');",2200);
	setTimeout("$('.name').append('e');",2500);
	setTimeout("$('.name').append('e');",2700);
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