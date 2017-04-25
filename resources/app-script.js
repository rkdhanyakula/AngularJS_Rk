/**
 * Created by ravi.dhanyakula on 25-Apr-17.
 */

var myApp = angular.module('myApp', []);
myApp.controller('myCtrl', myCtrl);
myCtrl.$inject = ['$rootScope'];

function myCtrl($rootScope) {
    $rootScope.addition = function (calcNumOne, calcNumTwo) {
        $rootScope.operatorName = '+';
        $rootScope.calcVale = calcNumOne + calcNumTwo;

    }

    $rootScope.subtraction = function (calcNumOne, calcNumTwo) {
        $rootScope.operatorName = '-';
        $rootScope.calcVale = calcNumOne - calcNumTwo;

    }

    $rootScope.multiply = function (calcNumOne, calcNumTwo) {
        $rootScope.operatorName = '*';
        $rootScope.calcVale = calcNumOne * calcNumTwo;

    }

    $rootScope.division = function (calcNumOne, calcNumTwo) {
        $rootScope.operatorName = '/';
        $rootScope.calcVale = calcNumOne / calcNumTwo;

    }
};