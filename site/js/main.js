// (function() {
// 	var navList = document.querySelector('.main_nav'),
// 		menu = document.querySelector('.menu');
//
// 	menu.addEventListener('click', function(e) {
// 		navList.classList.toggle('active');
// 		e.preventDefault();
// 		console.log('hey');
// 	});
// })();


//map loader
function initMap() {
	// The location of Uluru
	var uluru = { lat: 25.8102373, lng: -80.1751609 };
	// The map, centered at Uluru
	var map = new google.maps.Map(document.getElementById('map'), { zoom: 4, center: uluru });
	// The marker, positioned at Uluru
	var marker = new google.maps.Marker({ position: uluru, map: map });
}


$(document).ready(function() {

    $(".button-collapse").sideNav();

  });
