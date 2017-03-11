window.onload = function () {
	alert("Данное приложение создаст резюме");
	var firstName = prompt("Введите имя");
	var lastName = prompt("Введите фамилию");
	var photo = prompt ("Введите ссылку на фотографию");
	var biography = prompt("Напишите коротко о себе");
	document.getElementById('firstName').innerHTML = firstName;
	document.getElementById('lastName').innerHTML = lastName;
	document.getElementById("img").setAttribute("src", photo);
	document.getElementById('biography').innerHTML = biography;
	}
