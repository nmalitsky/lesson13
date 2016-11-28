'use strict';

angular
    .module('myApp')
    .controller('PokemonDetailEditCtrl', function ($scope) {
	$scope.pokemon = $scope.vm.pokemon;
	let orig = { 
		weight: $scope.pokemon.weight,
		height: $scope.pokemon.height
	}

	// check for empty values in form
	$scope.save = function() {
		if($scope.pokemon.weight == undefined) $scope.pokemon.weight = orig.weight;
		if($scope.pokemon.height == undefined) $scope.pokemon.height = orig.height;
	}

	$scope.cancel = function() {
		$scope.pokemon.weight = orig.weight;
		$scope.pokemon.height = orig.height;
	}
    });
