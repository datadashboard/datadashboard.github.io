'use strict';

/*main module definition*/
var dashboard = angular.module("dashboardApp", ["ui.router", "ngTouch", "ui-rangeSlider",
	"dashboardApp.Controllers",  "dashboardApp.Services", "dashboardApp.Directives", "dashboardApp.Filters", "ui.bootstrap", "ang-drag-drop"]);

dashboard.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state("home",{
			url: "/",
			views: {
				"header": {
					templateUrl: "partials/header.html",
					controller: "ContentController"
				},
				"content": {
					templateUrl: "partials/content.html",
					controller: "ContentController"
				}
			}
		})
		.state("home.explore",{
			url: "explore",
			views: {
				"content@": {
					templateUrl: "partials/contentExplore.html",
					controller: "ContentController"
				   
				}
			}
		})
		.state("home.actions",{
			url: "actions",
			views: {
				"content@": {
					templateUrl: "partials/contentQuickActions.html",
					controller: "ContentController"
				   
				}
			}
		})
		.state('home.settings', {
			url: 'settings',
			views: {
				'content@': {
					templateUrl: "partials/contentSettings.html",
					controller: "ContentController"
				}
			}
		});     
}]);