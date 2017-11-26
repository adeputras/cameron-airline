(function ($) {
	"use strict";
	$(document).ready(function () {
		// global map variable so we can reference it throughout the page
		var map;

		//set your google maps parameters
		var latitude = -33.936515,
			longitude = 151.252846,
			map_zoom = 18;

		//var bounds = new google.maps.LatLngBounds();

		//google map custom marker icon - .png fallback for IE11
		 var is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
		var marker_url = (is_internetExplorer11) ? 'images/map-marker.png' : 'images/map-marker.png';

		//we define here the style of the map
		var style = [{
				"featureType": "poi",
				"elementType": "labels.text",
				"stylers": [{
					"visibility": "off"
				}]
			},
			{
				"featureType": "poi.business",
				"stylers": [{
					"visibility": "off"
				}]
			},
			{
				"featureType": "road",
				"elementType": "labels.icon",
				"stylers": [{
					"visibility": "off"
				}]
			},
			{
				"featureType": "transit",
				"stylers": [{
					"visibility": "off"
				}]

			},
			{
				"featureType": "poi",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#b8bfd5"
				}]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry.fill",
				"stylers": [{
					"visibility": "on"
				}, {
					"color": "#e0e3ec"
				}]
			}, {
				"featureType": "road.local",
				"elementType": "labels.text.stroke",
				"stylers": [{
					"visibility": "off"
				}]
			}, {
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [{
					"visibility": "on"
				}, {
					"color": "#e0e3ec"
				}]
			}, {
				"featureType": "road.arterial",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#e0e3ec"
				}]
			}, {
				"featureType": "road",
				"elementType": "labels.text.fill",
				"stylers": [{
					"color": "#505d87"
				}]
			}, {
				"featureType": "landscape",
				"elementType": "geometry.stroke",
				"stylers": [{
					"visibility": "off"
				}]
			}, {
				"featureType": "landscape.man_made",
				"elementType": "labels.text.fill",
				"stylers": [{
					"visibility": "off"
				}]
			}, {
				"featureType": "road.arterial",
				"elementType": "labels.text.stroke",
				"stylers": [{
					"visibility": "off"
				}]
			}, {
				"featureType": "landscape.man_made",
				"elementType": "geometry",
				"stylers": [{
						"saturation": 26
					},
					{
						"lightness": -10
					},
					{
						"hue": 227
					}
				]
			},
		];


		//set google map options
		var map_options = {
			center: new google.maps.LatLng(latitude, longitude),
			zoom: map_zoom,
			panControl: false,
			zoomControl: false,
			mapTypeControl: false,
			streetViewControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
			styles: style,
		}
		//inizialize the map
		var map = new google.maps.Map(document.getElementById('map'), map_options);

		var marker = new google.maps.Marker({
			map: map,
			position: new google.maps.LatLng(latitude, longitude),
			icon: marker_url,
			
		});

	});

})(jQuery);