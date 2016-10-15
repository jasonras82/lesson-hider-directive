angular.module('directivePractice').controller('lessonCtrl', function($scope) {
  // $scope.testing = "boom, baby";

  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

  $scope.mainInput = 'boom';

  $scope.announceDay = function(lesson, day = 'no day, yet') {
    alert(lesson + ' is active on ' + day + '.');
  };

  // $scope.test = 'Two-way data binding!';

});
