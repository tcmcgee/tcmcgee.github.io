function loadHeader()
{
	blinker();
	animateName();
}

function showWidgets()
{
	$('.hiddenAtStart').delay(0).fadeIn('slow');
}

function blinker(){
$(".blinker").fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200).delay(100).fadeIn(200).fadeOut(200);
}

function instaName()
{
	setTimeout("$('.name').append('T');",1);
	setTimeout("$('.name').append('o');",4);
	setTimeout("$('.name').append('m');",8);
	setTimeout("$('.name').append(' ');",12);
	setTimeout("$('.name').append('M');",14);
	setTimeout("$('.name').append('c');",19);
	setTimeout("$('.name').append('G');",22);
	setTimeout("$('.name').append('e');",24);
	setTimeout("$('.name').append('e');",27);
}
function animateName()
{
	setTimeout("$('.name').append('T');document.getElementById('click_noise1').play();",100);
	setTimeout("$('.name').append('o');document.getElementById('click_noise3').play();",400);
	setTimeout("$('.name').append('m');document.getElementById('click_noise1').play();",800);
	setTimeout("$('.name').append(' ');document.getElementById('click_noise2').play();",1200);
	setTimeout("$('.name').append('M');document.getElementById('click_noise3').play();",1400);
	setTimeout("$('.name').append('c');document.getElementById('click_noise1').play();",1900);
	setTimeout("$('.name').append('G');document.getElementById('click_noise3').play();",2200);
	setTimeout("$('.name').append('e');document.getElementById('click_noise4').play();",2400);
	setTimeout("$('.name').append('e');document.getElementById('click_noise4').play();",2700);
}