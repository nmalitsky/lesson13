'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'ngMessages'
]).
config(function($stateProvider) {

      var view1State = {
        name: 'view1',
        url: '/view1',
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
      };

      var view2State = {
        name: 'view2',
        url: '/view2',
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
      };

      var pokeListState = {
        name: 'pokeList',
        url: '/list',
        templateUrl: 'PokemonList/PokemonList.html',
        controller: 'PokemonListCtrl as vm'
      };
      var createPokemonState = {
        name: 'createNewPokemon',
        url: '/new',
        templateUrl: 'CreatePokemon/CreatePokemon.html',
        controller: 'CreatePokemonCtrl as vm'
      };
      var pokemonDetailState = {
        name: 'detail',
        url: '/pokemons/:pokemonId',
        templateUrl: 'PokemonDetail/PokemonDetail.html',
        controller: 'PokemonDetailCtrl as vm'
      };
      var pokemonDetailEditState = {
        name: 'detail.edit',
        url: '/edit',
	parent: pokemonDetailState,
        templateUrl: 'PokemonDetail/PokemonDetailEdit.html',
        controller: 'PokemonDetailEditCtrl'
      };

      $stateProvider
          .state(pokeListState)
          .state(createPokemonState)
          .state(pokemonDetailState)
          .state(pokemonDetailEditState);
})
.controller('MenuCtrl', function ($scope) {
    let mn = this;
    mn.menuItems = [
            { name: 'pokeList', heading: "Список" },
            { name: 'createNewPokemon', heading: "Добавить нового" }
    ];
});
