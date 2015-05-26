var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider){

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'partial-home.html'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'partial-about.html'
		});

		

	$urlRouterProvider.otherwise('/home');
});