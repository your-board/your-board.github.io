// public/js/services/BoardService.js

angular.module('boardService', []).factory('Board', ['http', function($http) {
    
    return {
       // get all boards
       get:function() {
           return $http.get('/boards');
       },
       // create a new board
       create:function(boardData) {
           return $http.post('/boards', boardData);
       },
       // delete a board
       delete:function(id) {
           return $http.delete('/boards/' +id);
       }
    }
}]);
