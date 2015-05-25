flapperNews = angular.module('flapperNews', [])
.controller('MainCtrl', [
	'$scope',
	function($scope){
		$scope.name = "Chirag";
		$scope.posts = [
			{ title: 'one lorem', upvotes: 100 },
			{ title: 'two lorem', upvotes: 200 },
			{ title: 'three lorem', upvotes: 300 },
			{ title: 'four lorem', upvotes: 400  },
			{ title: 'five lorem', upvotes: 500  }
		];
		$scope.addPost = function(title){
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