'use strict';

/**
 * @ngdoc function
 * @name ambassadorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ambassadorApp
 */
angular.module('ambassadorApp')
  .controller('MainCtrl', function ($scope) {
    $scope.mainSections = [
      {
      	title: 'Who We Are',
      	image: 'chalkArrow.jpg',
      	color: '#83a705',
      	children: [
      		{
      			title: 'A Consulting Firm Like You\'ve Never Experienced',
      			image: 'hdr_about1.jpg',
      			text: 'Daugherty Business Solutions is a consulting firm like you’ve never experienced. We don’t simply prescribe technology solutions. We solve business problems for some of the largest organizations on the planet.'
      		},
      		{
      			title: 'Excellence, Recognized',
      			image: 'hdr_about_awards.jpg',
      			text: 'We’re proud of the good work we do for our clients, and for our community. Of course, we don’t do it for the awards – but are flattered when our neighbors and peers recognize our efforts.'
      		},
      		{
      			title: 'Leading Us Forward',
      			image: 'hdr_about_leadership.jpg'
      		}
      	]
      },
      {
      	title: 'What We Do',
      	image: 'phone.jpg',
      	color: '#ff4e00',
      	children: [
      		{
      			title: 'Management Consulting',
      			image: 'hdr_services_mgtconsulting.jpg'
      		},
      		{
      			title: 'Mobile Consulting',
      			image: 'hdr_services_mobile_consulting1.jpg'
      		},
      		{
      			title: 'Business Intelligence',
      			image: 'hdr_services_business_intelligence.jpg'
      		},
      		{
      			title: 'Custom Development',
      			image: 'hdr_services_custom_development1.jpg'
      		},
      		{
      			title: 'Managed Services',
      			image: 'hdr_services_outsourcing.jpg'
      		}
      	]
      },
      {
      	title: 'Some Guy Talking on Phone',
      	image: 'man.jpg',
      	color: '#538b1e',
      	children: [
      		{
      			title: 'This is serious!',
      			image: 'Emotional.Business.Phone.Talk.jpg'
      		},
      		{
      			title: 'Where am I? An Airport?',
      			image: 'gov_rf.jpg'
      		},
      		{
      			title: 'Exciting',
      			image: 'what-are-the-top-lies-men-tell-women-448360899-sep-20-2012-1-600x400.jpg'
      		}
      	]
      }
    ];

    $scope.getURL = function(str){
    	return str.toLowerCase().replace(/\s+/g, '-');
    };

  });

$(document).on('click tap', '.mainSection > h1, .sectionContentContainer > img', function(){
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
});