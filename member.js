function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'templates/skills-member.html',
    scope: {
      member: '='
    },
    controller: function ($scope) {
      $scope.getSkills = function (member) {
        return member.skills.join(', ');
      }
    }
  };
}