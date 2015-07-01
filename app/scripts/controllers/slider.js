'use strict';

/**
 * @ngdoc function
 * @name html5Application1App.controller:SliderCtrl
 * @description
 * # SliderCtrl
 * Controller of the html5Application1App
 */
angular.module('yeomanProject')
  .controller('SliderCtrl', function($scope) {
    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
  }).directive('jCaraousel', function($timeout) {
    return {
      restrict: 'E',
      scope: {
        sliderContent: '='
      },
      templateUrl: '../../views/slider.html',
      link: function() {

        $timeout(function() {
          (function($) {
            $(function() {
              var jcarousel = $('.jcarousel');

              jcarousel
                .on('jcarousel:reload jcarousel:create', function() {
                  var carousel = $(this),
                    width = carousel.innerWidth();
                  if (width >= 600) {
                    width = width / 4;
                  } else if (width >= 350) {
                    width = width / 2;
                  }

                  carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
                })
                .jcarousel({
                  wrap: 'circular'
                });

              $('.jcarousel-control-prev')
                .jcarouselControl({
                  target: '-=1'
                });

              $('.jcarousel-control-next')
                .jcarouselControl({
                  target: '+=1'
                });

              $('.jcarousel-pagination')
                .on('jcarouselpagination:active', 'a', function() {
                  $(this).addClass('active');
                })
                .on('jcarouselpagination:inactive', 'a', function() {
                  $(this).removeClass('active');
                })
                .on('click', function(e) {
                  e.preventDefault();
                })
                .jcarouselPagination({
                  perPage: 1,
                  item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                  }
                });
            });
          })(jQuery);
        }, 500);
      }
    }
  });
