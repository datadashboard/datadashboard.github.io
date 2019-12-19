'use strict';
//create a module to oranize controllers
var controllersModule = angular.module("dashboardApp.Controllers", [])
/* Controllers */


controllersModule.controller('ContentController', function($scope, $http, $location) {

	//check the current path to set menu item in header as active
	$scope.isCurrentPath = function (path) {
    return $location.path() == path;
  };

  // filter for Explore Your Data section
  $scope.exploreFilter = function() {

    $scope.photosCount = [
        {dataType:'getrid', count: '178 - 1.04 GB'},
        {dataType:'organize', count: '98'},
        {dataType:'private', count: '93'},
        {dataType:'backup', count: '145'},
        {dataType:'all', count:'514'},
    ];

    $scope.photos = [
        {dataType:'private||all', name: '11 contain passport numbers'},
        {dataType:'getrid||all', name: '129 large photos (788 MB)'},
        {dataType:'getrid||all', name: '49 blurry photos (248 MB)'},
        {dataType:'private||all', name: '79 with faces'},
        {dataType:'private||all', name: '3 of passports'},
        {dataType:'organize||all', name: '98 could go into existing albums'},
        {dataType:'backup||all', name: '145 not copied to the cloud'},
    ];

    $scope.emailsCount = [
        {dataType:'getrid', count: '169 - 142 MB'},
        {dataType:'organize', count: '1430'},
        {dataType:'private', count: '63'},
        {dataType: 'all', count: '1662'},
    ];

    $scope.emails = [
        {dataType:'private||all', name: '14 have attachments with passport numbers'},
        {dataType:'private||all', name: '37 have flight ticket numbers'},
        {dataType:'private||all', name: '12 have credit card numbers'},
        {dataType:'getrid||all', name: '57 have large attachments (125 MB)'},
        {dataType:'getrid||all', name: '112 old newsletters (17 MB)'},
        {dataType:'organize||all', name: '1430 unanswered'},];

    $scope.docCount = [
        {dataType: 'getrid', count: '86 - 158 MB'},
        {dataType: 'organize', count: '15'},
        {dataType: 'private', count: '50'},
        {dataType: 'backup', count: '101'},
        {dataType: 'all', count: '252'},
    ];

    $scope.documents = [
        {dataType:'all||getrid', name: '2 duplicates (45 MB)'},
        {dataType:'all||getrid', name: '5 old versions (5 MB)'},
        {dataType:'all||getrid', name: '1 empty (1 KB)'},
        {dataType:'all||organize', name: '12 with unusual or empty names'},
        {dataType:'all||organize', name: '3 outside folders'},
        {dataType:'all||private', name: '1 has credit card numbers'},
        {dataType:'all||backup', name: '1 not synced to Dropbox'},
        {dataType:'all||backup', name: '2 not synced to Google Drive'},
        {dataType:'all||getrid', name:'34 similar documents (32 MB)'},
        {dataType:'all||private', name:'39 have physical addresses'},
        {dataType:'all||getrid', name:'44 old versions of the same document (76 MB)'},
        {dataType:'all||private', name:'10 have passport numbers'},
        {dataType:'all||backup', name:'98 not copied to your external hard disk'}];


$scope.videoCount = [
        {dataType: 'getrid', count: '50 - 23 GB'},
        {dataType: 'organize', count: '2'},
        {dataType: 'private', count: '14'},
        {dataType: 'backup', count: '14'},
        {dataType: 'all', count: '66'},
    ];

    $scope.videos = [
        {dataType:'all||getrid', name: '12 large videos (2.3 GB)'},
        {dataType:'all||getrid', name: '33 movies already watched (12.5 GB)'},
        {dataType:'all||getrid', name: '5 movies never watched (8.2 GB)'},
        {dataType:'all||private||backup', name: '14 with family'},
        //{dataType:'backup', name: '14 with family'},
        {dataType:'all||organize', name: '2 with unusual names'}
    ];

    $scope.folderCount = [
        {dataType: 'getrid', count: '142 - 790 MB'},
        {dataType: 'organize', count: '38'},
        {dataType: 'private', count: '5'},
        {dataType: 'backup', count: ''},
        {dataType: 'all', count: '185'},
    ];

      $scope.folders = [
        {dataType:'all||getrid', name: '13 empty (1 KB)'},
        {dataType:'all||getrid', name: '129 taking space (789 MB)'},
        {dataType:'all||organize', name: '38 with duplicate names'},
        {dataType:'all||private', name: '5 folders have passport scans'}
        ];

        $scope.contactCount = [
        {dataType: 'getrid', count: '216 - 3 MB'},
        {dataType: 'organize', count: ''},
        {dataType: 'private', count: ''},
        {dataType: 'backup', count: ''},
        {dataType: 'all', count: '216'},
    ];

      $scope.contacts = [
          {dataType:'all||getrid', name: '54 duplicates (1 MB)'},
          {dataType:'all||getrid', name: '122 unused (2 MB)'},
          {dataType:'all||getrid', name: '40 unreachable (1 MB)'}
      ];

   $scope.appCount = [
        {dataType: 'getrid', count: '20 - 9.1 GB'},
        {dataType: 'organize', count: '10'},
        {dataType: 'private', count: ''},
        {dataType: 'backup', count: '5'},
        {dataType: 'all', count: '35'},
    ];

      $scope.applications = [
          {dataType:'all||getrid', name: '9 unused (3.7 GB)'},
          {dataType:'all||getrid', name: '11 unused and taking space (5.4 GB)'},
          {dataType:'all||organize', name: '3 without a security certificate'},
          {dataType:'all||organize', name: '7 frequently used'},
          {dataType:'all||backup', name: '5 have frequently used data'},
      ];

   $scope.messageCount = [
        {dataType: 'getrid', count: '2764 - 1.37 GB'},
        {dataType: 'organize', count: '329'},
        {dataType: 'private', count: '109'},
        {dataType: 'backup', count: ''},
        {dataType: 'all', count: '3202'},
    ];

      $scope.messages = [
          {dataType:'all||getrid', name: '2249 old messages (15 MB)'},
          {dataType:'all||getrid', name: '183 audio messages (364 MB)'},
          {dataType:'all||private', name: '48 have physical addresses'},
          {dataType:'all||organize||getrid', name: '317 have photos (932 MB)'},
          //{dataType:'getrid', name: '317 have photos'},
          {dataType:'all||private', name: '28 have phone numbers'},
          {dataType:'all||private', name: '33 have credit card numbers'},
          {dataType:'all||organize||getrid', name: '15 inactive group conversations (56 MB)'},
          //{dataType:'getrid', name: '15 inactive group conversations'}
      ];

      $scope.logCount = [
        {dataType: 'getrid', count: '4948 - 1.03 GB'},
        {dataType: 'organize', count: ''},
        {dataType: 'private', count: '5317'},
        {dataType: 'backup', count: ''},
        {dataType: 'all', count: '5428'},
    ];
      $scope.logs = [
          {dataType:'all||getrid', name: '39 temporary files taking space (265 MB)'},
          {dataType:'all||getrid||private', name: '4837 items in your browser search history (34 MB)'},
          //{dataType:'private', name: '4837 items in your browser search history'},
          {dataType:'all||getrid', name: '72 images taking space in your browser cache (735 MB)'},
          {dataType:'all||private', name: '480 locations in your search history'},
      ];

$scope.bookmarkCount = [
        {dataType: 'getrid', count: '151 - 6 KB'},
        {dataType: 'organize', count: '56'},
        {dataType: 'private', count: '9'},
        {dataType: 'backup', count: '27'},
        {dataType: 'all', count: '199'},
    ];

      $scope.bookmarks = [
          {dataType:'all||getrid', name: '76 unused (2 KB)'},
          {dataType:'all||getrid||organize', name: '44 old (2 KB)'},
          //{dataType:'organize', name: '44 old'},
          {dataType:'all||getrid', name: '8 duplicates (1 KB)'},
          {dataType:'all||getrid', name: '23 unreachable (1 KB)'},
          {dataType:'all||organize', name: '12 similar'},
          {dataType:'all||backup', name: '27 work-related'},
          {dataType:'all||private', name: '9 to locations with saved passwords'},
      ];

      $scope.ebookCount = [
        {dataType: 'getrid', count: '54 - 1.8 GB'},
        {dataType: 'organize', count: '42'},
        {dataType: 'private', count: ''},
        {dataType: 'backup', count: '9'},
        {dataType: 'all', count: '63'},
    ];
      $scope.ebooks = [
          {dataType:'all||getrid||organize', name: '39 completed (369 MB)'},
          {dataType:'all||getrid||organize', name: '3 old, unread (76 MB)'},
          {dataType:'all||getrid', name: '12 taking singificant space (1.4 GB)'},
          {dataType:'all||backup', name: '9 only saved on your computer'}
      ];

$scope.trackCount = [
        {dataType: 'getrid', count: '112 - 5 KB'},
        {dataType: 'organize', count: ''},
        {dataType: 'private', count: '513'},
        {dataType: 'backup', count: ''},
        {dataType: 'all', count: '513'},
    ];

      $scope.tracks = [
          {dataType: 'all||private', name: '57 frequently searched keywords'},
          {dataType: 'all||private', name: '344 locations visited'},
          {dataType: 'all||getrid||private', name: '112 advertising cookies (5 KB)'},
          //{dataType: 'private', name: '112 advertising cookies'},
      ];
  };

  // filter for Quick Actions div elements

  $scope.ActionOrganizeVisible = false;
  $scope.ActionRemoveVisible = false;
  $scope.ActionSensitiveVisible = false;
  $scope.ActionSyncVisible = false;
  $scope.AllDefault = true;

  $scope.showActionOrganize = function () {
    $scope.ActionOrganizeVisible = $scope.ActionOrganizeVisible = true;
    $scope.ActionRemoveVisible = $scope.ActionRemoveVisible = false;
    $scope.ActionSensitiveVisible = $scope.ActionSensitiveVisible = false;
    $scope.ActionSyncVisible = $scope.ActionSyncVisible = false;
    $scope.AllDefault = false;    
    console.log("showActionOrganize triggered");
    console.log("variable showActionOrganize is" +$scope.ActionOrganizeVisible);
  };

  $scope.showActionRemove = function () {
    $scope.ActionOrganizeVisible = $scope.ActionOrganizeVisible = false;
    $scope.ActionRemoveVisible = $scope.ActionRemoveVisible = true;
    $scope.ActionSensitiveVisible = $scope.ActionSensitiveVisible = false;
    $scope.ActionSyncVisible = $scope.ActionSyncVisible = false;
    $scope.AllDefault = false;
    console.log("showActionRemove triggered");
    console.log("$scope.ActionRemoveVisible is... " +$scope.ActionRemoveVisible);

  };
  
  $scope.showActionSensitive = function () {
    $scope.ActionOrganizeVisible = $scope.ActionOrganizeVisible = false;
    $scope.ActionRemoveVisible = $scope.ActionRemoveVisible = false;
    $scope.ActionSensitiveVisible = $scope.ActionSensitiveVisible = true;
    $scope.ActionSyncVisible = $scope.ActionSyncVisible = false; 
    $scope.AllDefault = false;
    console.log("showActionSensitive triggered");
  };

  $scope.showActionSync = function () {
    $scope.ActionOrganizeVisible = $scope.ActionOrganizeVisible = false;
    $scope.ActionRemoveVisible = $scope.ActionRemoveVisible = false;
    $scope.ActionSensitiveVisible = $scope.ActionSensitiveVisible = false;
    $scope.ActionSyncVisible = $scope.ActionSyncVisible = true;
    $scope.AllDefault = false; 
    console.log("showActionSync triggered");
  };

  $scope.showActionAll = function () {
    $scope.ActionOrganizeVisible = $scope.ActionOrganizeVisible = true;
    $scope.ActionRemoveVisible = $scope.ActionRemoveVisible = true;
    $scope.ActionSensitiveVisible = $scope.ActionSensitiveVisible = true;
    $scope.ActionSyncVisible = $scope.ActionSyncVisible = true;
    $scope.AllDefault = true;
    console.log("showActionAll triggered");
  };


});