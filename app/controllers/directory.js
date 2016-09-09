angular.module('directoryApp', [])
    .controller('directoryController', function() {
        var dirList = this;

        dirList.list = [
            {name:'Scott', age: 30},
            {name:'Artur', age: 11},
            {name:'Maciek', age: 14},
            {name:'Stefan', age: 21}
        ];

        dirList.addPerson = function() {
            dirList.list.push({name:dirList.name, age: dirList.age});
            dirList.name = '';
            dirList.age = 0;
        };
    });