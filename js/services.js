'use strict';
//create a module to oranize services
var serviceModule = angular.module("dashboardApp.Services", [])


serviceModule.service('exploreService', function() {
    var filterTags = [];
    return {
        get: function(){
            return filterTags;
        },
        set: function(value){
            filterTags = value;
        }
    };  
});


