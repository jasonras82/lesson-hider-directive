angular.module('directivePractice').directive('lessonHider', function() {
  return {
    templateUrl: 'lessonHider.html',
    restrict: 'E',
    scope: {
      lesson: '=',
      dayAlert: '&'
    },
    controller: function($scope, lessonService) {
      $scope.getSchedule = lessonService.getSchedule();
    },
    link: function(scope, ele, att) {
      scope.getSchedule.then(function(response) {
        scope.schedule = response.data;
        scope.schedule.forEach(function(scheduleDay) {
          if (scheduleDay.lesson === scope.lesson) {
            ele.css('text-decoration', 'line-through');
            scope.lessonDay = scheduleDay.weekday
            return;
          }
        });
      });

    }
  };
});
