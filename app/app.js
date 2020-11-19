let nameApp = angular.module('nameApp',['ngRoute','ngAnimate'])

nameApp.config(['$routeProvider',($routeProvider)=>{
    $routeProvider
    .when('/home',{
        templateUrl:'views/home.html'
    })
    .when('/list',{
        templateUrl:'views/todo.html',
        controller: 'todoController'
    })
    .otherwise({
        redirectTo:'/home'
    })
}])

nameApp.controller('todoController',['$scope',function($scope){
    $scope.removeTodo = (todo) =>{
        let removeTodo = $scope.todos.indexOf(todo)
        $scope.todos.splice(removeTodo,1)
    }

    $scope.addDetails = () =>{
        $scope.todos.push({
            list:$scope.newTodo.list,
            style:'none'
        })
        $scope.newTodo.list = ''
    }
    $scope.removeAllTodo = () => {
        $scope.todos = []
    }
    $scope.statusOfTodo = (todo) =>{
        let index = $scope.todos.indexOf(todo)
        if (todo.style == 'none') {
            $scope.todos[index].style = 'line-through'
        }else{
            $scope.todos[index].style = 'none'
        }
    }
    $scope.todos=[
        // {
        //     list:'test',
        //     style:'none'
        // },
        // {
        //     list:'test2',
        //     style:'none'
        // }
        ]
}])