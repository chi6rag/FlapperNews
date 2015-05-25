flapperNews = angular.module('flapperNews', [])
.controller('MainCtrl', [
	'$scope',
	function($scope){
		$scope.posts = [
			{ title: 'First Post', upvotes: 100, link: 'https://www.example.com' },
			{ title: 'Second Post', upvotes: 200, link: 'https://www.example.com' },
			{ title: 'Third Post', upvotes: 300, link: 'https://www.example.com' },
			{ title: 'Fourth Post', upvotes: 400, link: 'https://www.example.com'  },
			{ title: 'Fifth Post', upvotes: 500, link: 'https://www.example.com'  }
		];
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