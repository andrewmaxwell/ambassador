'use strict';

/**
 * @ngdoc function
 * @name ambassadorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ambassadorApp
 */
angular.module('ambassadorApp')
  .controller('MainCtrl', function ($http, $scope) {

	$http.get('ambassador-structure.json').then(function(response){
		$scope.mainSections = response.data;
	});
   
	// $scope.getURL = function(str){
	// 	return str.toLowerCase().replace(/\s+/g, '-');
	// };

  });

$(document)
	  .on('click tap', '.mainSection > h1, .sectionContentContainer > img', function(){
		var mainSection = $(this).closest('.mainSection').toggleClass('open');
		var content = mainSection.children('.sectionContentContainer');
		if (mainSection.hasClass('open')){
			content.find('.childText').hide();
			content.children('img').slideUp();
			content.children('.childContainer').slideDown(function(){
				$(this).find('.childText').each(function(index){
					var el = $(this);
					setTimeout(function(){
						el.fadeIn();
					}, index * 200);
				});
			});
		} else {
			content.children('.childContainer').slideUp();
			content.children('img').slideDown();
		}
	  })

	  .on('click tap', '.childSection', function(){
			console.log('yay!');
	  });