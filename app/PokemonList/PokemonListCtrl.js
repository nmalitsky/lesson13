'use strict';

angular
    .module('myApp')
    .controller('PokemonListCtrl', function(PokemonService) {

    var vm = this;

    vm.myOrderProperty = 'id';
    vm.myQuery = '';

    PokemonService.getPokemons().then(function(pokemonData) {
        console.log(pokemonData);
        vm.pokemons = pokemonData.data;
    });

});
