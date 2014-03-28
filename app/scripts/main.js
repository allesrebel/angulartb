'use strict';
angular
	.module('app', ['ui.router'])
	.config(['$urlRouterProvider', '$stateProvider',
		function($urlRouterProvider, $stateProvider)
		//we define our routes here (uses the view in the index.html file)    
		{
			$urlRouterProvider.otherwise('/'); //makes all other routes default to root
			$stateProvider
				.state('home', {
					url: '/',
					//templateUrl not templateURL (case senstive!)
					templateUrl: 'pages/home.html',
					//now we define a controller that only exists in home.html
					controller: 'homeCtrl'
				})
				.state('about', {
					url: '/about',
					templateUrl: 'pages/about.html',
					controller: 'aboutCtrl'
				})
				.state('contact', {
					url: '/contact',
					templateUrl: 'pages/contact.html',
					controller: 'contactCtrl'
				});
		}
	]);