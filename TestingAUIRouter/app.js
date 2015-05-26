var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider){

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'partial-home.html'
		})

		.state('home.list', {
			url: '/homelist',
			templateUrl: 'partial-home-list.html',
			controller: function($scope){
				$scope.dogs = ['Husky', 'Scooby', 'Oscar'];
			}
		})

		.state('home.paragraph', {
			url: '/homepara',
			templateUrl: 'partial-home-paragraph.html',
			controller: function($scope){
				$scope.paragraph = "lorem ipsum dolor";
			}
		})

		.state('about', {
			url: '/about',
			templateUrl: 'partial-about.html'
		});		

	$urlRouterProvider.otherwise('/home');
});