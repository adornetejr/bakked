app.controller('mainController', function ($scope, mainServ) {
    $scope.filmes = {};

    mainServ.getDocuments(function (response) {
        $scope.filmes = response;
        console.log($scope.filmes);
    });


});