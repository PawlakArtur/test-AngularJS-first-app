angular.module('directoryApp', ['ngAnimate', 'ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '../views/home.html',
                controller: 'directoryController as dirList'
            })
            .state('about', {
                url: '/about',
                templateUrl: '../views/about.html'
            });
    })
    .controller('directoryController', function() {
        var dirList = this;

        dirList.toggle = true;

        dirList.list = [
            {name:'Scott', age: 34, img: 'https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg'},
            {name:'Artur', age: 11, img: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'},
            {name:'Maciek', age: 14, img: 'https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg'},
            {name:'Stefan', age: 21, img: 'https://s3.amazonaws.com/uifaces/faces/twitter/sauro/128.jpg'}
        ];

        dirList.addPerson = function() {
            dirList.list.push({name:dirList.name, age: dirList.age});
            dirList.name = '';
            dirList.age = 0;
        };
    })
    .directive('directoryPerson', function() {
        return {
            templateUrl: 'directory-person.html'
        }
    });