
app.controller("MainController", function($scope){
	$scope.understand = "I now understand how the scope works!";
	$scope.inputValue = "";

	$scope.selectedPerson = 0;
	$scope.selectedGenre = null;
	$scope.people = [
		{id: 0, name: 'Leon', music:[ 'Rock','Metal','Dubstep','Electro'], live: true},
		{id: 1, name: 'Claire', music:[ 'Indie','House','Dubstep','Electro'], live: false},
		{id: 2, name: 'Chris', music:[ 'Rock','Metal','Trash Metal','Heavy Metal'], live: true},
		{id: 3, name: 'Jill', music:[ 'Pop','RnB','Hip Hop','Electro'], live: true}
	];

	$scope.newPerson = null;
	$scope.addNew = function(){
		if($scope.newPerson != null && $scope.newPerson != ""){
			$scope.people.push({ id: $scope.people.length, name: $scope.newPerson, live: true, music: []});
		}
	}
});