'use strict';

angular
    .module('myApp')
    .controller('PokemonDetailEditCtrl', function ($scope) {
	$scope.pokemon = $scope.vm.pokemon;
	let orig = { 
		weight: $scope.pokemon.weight,
		height: $scope.pokemon.height
	}

	$scope.cancel = function() {
		$scope.pokemon.weight = orig.weight;
		$scope.pokemon.height = orig.height;
	}
    });
