flapperNews = angular.module('flapperNews', [])
.controller('MainCtrl', [
	'$scope',
	function($scope){
		$scope.name = "Chirag"
		$scope.posts = [
			{ title: 'one lorem', upvotes: 500 },
			{ title: 'two lorem', upvotes: 400 },
			{ title: 'three lorem', upvotes: 300 },
			{ title: 'four lorem', upvotes: 200  },
			{ title: 'five lorem', upvotes: 100  }
		]
}]);