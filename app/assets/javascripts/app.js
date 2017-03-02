// ['ui.router', 'templates']
(function(ng) {
	"use strict";

	ng.module('sixStringApp', ['ui.router', 'templates']);

	ng.module('sixStringApp').config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');
		// $urlRouterProvider.when('/', '/' + 'login');
		$stateProvider.state('gameParent', {
			url: '/',
			abstract: true,
			template: '<ui-view></ui-view>'
		}).state('gameParent.loginCtrl', {
			url: 'login',
			controller: 'LoginController as logCtrl',
			templateUrl: 'login.html'
		}).state('gameParent.startCtrl', {
			url: 'start',
			controller: 'StartController as startCtrl',
			templateUrl: 'start.html'
		}).state('gameParent.gameCtrl', {
			url: 'game',
			controller: 'GameController as gameCtrl',
			templateUrl: 'game.html'
		}).state('gameParent.ldbdCtrl', {
			url: 'leaderboard',
			controller: 'LeaderboardController as ldbdCtrl',
			templateUrl: 'leaderboard.html'
		}).state('gameParent.winCtrl', {
			url: 'win',
			controller: 'WinController as winCtrl',
			templateUrl: 'win.html'
		});
	});

})(angular);
