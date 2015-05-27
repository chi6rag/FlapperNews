var flapperNews = angular.module('flapperNews', ['ui.router']);

flapperNews.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){

		$stateProvider
		  .state('home', {
		  	url: '/home',
		  	templateUrl: '/home.html',
		  	controller: 'MainCtrl'
		  })

		  .state('posts', {
		  	url: '/posts/{id}',
		  	templateUrl: 'posts.html',
		  	controller: 'PostsCtrl'
		  });

		$urlRouterProvider.otherwise('/home');
	}
]);

flapperNews.controller('MainCtrl', [
	'$scope', 'posts',
	function($scope, posts){
		$scope.posts = posts.posts;
		$scope.addPost = function(){
			console.log($scope.link);
			if($scope.title==undefined || $scope.title.match(/^\s+$/)){ return; }
			$scope.posts.push({
				title: $scope.title,
				link: $scope.link,
				upvotes: 0
			});
			$scope.title = '';
			$scope.link = '';
		};
		$scope.incrementUpvotes = function(post){
			post.upvotes += 1
		};
}]);

flapperNews.controller('PostsCtrl', [
	'$scope', '$stateParams', 'posts',
	function($scope, $stateParams, posts){
		$scope.posts = posts.posts;
		var postToPush = {
			title: 'Pushed Post',
			upvotes: 0,
			link: 'http://chi6rag.example.com',
			comments: [
				{ author: 'Chirag', body: 'lorem ipsum dolor', upvotes: 0 },
				{ author: 'Ishan', body: 'lorem ipsum dolor', upvotes: 0 },
				{ author: 'Arnav', body: 'lorem ipsum dolor', upvotes: 0 },
				{ author: 'Saurav', body: 'lorem ipsum dolor', upvotes: 0 },
				{ author: 'Laavanya', body: 'lorem ipsum dolor', upvotes: 0 }
			]
		}
		$scope.posts.push(postToPush);
		$scope.selected_post = posts.posts[$stateParams.id]
	}
]);

flapperNews.factory('posts', [function(){
	var output = {};
	output.posts = [
		{ title: 'First Post', upvotes: 100, link: 'https://www.example.com' },
		{ title: 'Second Post', upvotes: 200, link: 'https://www.example.com' },
		{ title: 'Third Post', upvotes: 300, link: 'https://www.example.com' },
		{ title: 'Fourth Post', upvotes: 400, link: 'https://www.example.com'  },
		{ title: 'Fifth Post', upvotes: 500, link: 'https://www.example.com'  }
  ];
  return output;
}]);