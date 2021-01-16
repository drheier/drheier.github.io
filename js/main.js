var details = ['allgemeines', 'sprechzeiten', 'blutentnahme', 'bestellungen', 'sprechzeiten', 'notfalldienst', 'videosprechstunde', 'impressum']

$(document).ready(function($) {

	"use strict";

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#probootstrap-loader').length > 0) {
				$('#probootstrap-loader').removeClass('show');
			}
		}, 1);
	};
	loader();
});


$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	e.target // newly activated tab
	e.relatedTarget // previous active tab
	
	details.forEach((element) => {
		console.log(element, e.target.id)
		if (element === e.target.id.replace('-tab', '')) {
			document.getElementById(element).style.display = "flex"
		} else {
			document.getElementById(element).style.display = "none"
		}
	})
  })

  details.forEach((element) => {
	if (element === 'allgemeines') {
		document.getElementById(element).style.display = "flex"
	} else {
		console.log(element)
		document.getElementById(element).style.display = "none"
	}
})

$(function() {
	fetch('https://raw.githubusercontent.com/drheier/drheier.github.io/master/news.md', {'method': 'GET'}).then(s => {
	  if(s.status === 200) {
		s.text().then(t => {
		  if (t && t != "\n") {
			$('#news').text(t)
			$('#news-alert').css('display', 'block') 
		  }
		})
	  } else {
		console.warn(s)
	  }
	}).catch(err => console.error(err))
  })
