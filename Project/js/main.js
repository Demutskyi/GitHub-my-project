// var a = 35;
// prompt ('Напишите значения переменой а')
// if  (a == 35) {
// 	//alert ('a = 37');
// } 
// else {
// alert ('что-то другое')
// }

//for (var i = 0;i < 5;i++) {
	//alert (i);
//}

// var user = {
// 	'name': 'Петя',
// 	'surname': 'Петрович',
// 	'age': 25
// }
//alert (user['age'])

//var mas = ['Петья', 'Петрович',25]
//alert (mas[2])

// function domagic (){
// 	alert(5 + 5);
// }
// domagic();

var btn = document.getElementById('btn');
btn.onclick = function (e) {
	e.preventDefault();
	var text = document.querySelector('.p_text');
	text.classList.add('red');
	var img = document.querySelector('.travel');
	img.style.display = 'none';
	document.querySelector('.skill_create').style.marginLeft = "50px";
}
$(function() {
	$(window).scroll(function() {
		$('#farward .section_text').each(function() {
			var imagePos = $(this).offset().top;

			var topOfwindows = $(window).scrollTop();
			if (imagePos < topOfwindows+650) {
				$(this).addClass("fadeInLeft");
			}
		});
	});

	$(window).scroll(function() {
		$('#farward .Time').each(function() {
			var imagePos = $(this).offset().top;

			var topOfwindows = $(window).scrollTop();
			if (imagePos < topOfwindows+650) {
				$(this).addClass("rotateIn");
			}
		});
	});

	$(window).scroll(function() {
		$('#farward .skill_title').each(function() {
			var imagePos = $(this).offset().top;

			var topOfwindows = $(window).scrollTop();
			if (imagePos < topOfwindows+650) {
				$(this).addClass("swing");
			}
		});
	});

	$(window).scroll(function() {
		$('#farward .skill_p').each(function() {
			var imagePos = $(this).offset().top;

			var topOfwindows = $(window).scrollTop();
			if (imagePos < topOfwindows+650) {
				$(this).addClass("swing");
			}
		});
	});

	$(window).scroll(function() {
		$('#farward .Palm').each(function() {
			var imagePos = $(this).offset().top;

			var topOfwindows = $(window).scrollTop();
			if (imagePos < topOfwindows+650) {
				$(this).addClass("bounceIn");
			}
		});
	});

	$(window).scroll(function() {
		$('#farward .Rocket').each(function() {
			var imagePos = $(this).offset().top;

			var topOfwindows = $(window).scrollTop();
			if (imagePos < topOfwindows+650) {
				$(this).addClass("fadeInUpBig");
			}
		});
	});
})
