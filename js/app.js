'use strict';

var app = angular.module('adsApp', ['ngRoute', 'ngResource', 'LocalStorageModule']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/')

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {    
        templateUrl: 'templates/home.html', 
        controller: 'HomeCtrl'
    });
    $routeProvider.when('/login',{
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
    });
    $routeProvider.when('/register',{
        templateUrl: 'templates/register.html',
        controller: 'RegisterCtrl'
    });
    $routeProvider.when('/user/publish_ad',{
        templateUrl: 'templates/logged-in/publish-ads.html',
        controller: 'PublishAdsCtrl'
    });
    $routeProvider.when('/user/ads',{
        templateUrl: 'templates/logged-in/user-ads.html',
        controller: 'UserAdsCtrl'
    });
    $routeProvider.when('/user/profile',{
        templateUrl: 'templates/logged-in/userProfile.html',
        controller: 'UserProfileCtrl'
    });
    $routeProvider.when('/logout',{
        templateUrl: 'templates/home.html',
        controller: 'LogoutCtrl'
    });
    
    // Admin Panel Templates
    $routeProvider.when('/admin/ads',{
        templateUrl: 'templates/admin_tmp/allAds.html',
        controller: 'AllAdsCtrl'
    });
    $routeProvider.when('/admin/users',{
        templateUrl: 'templates/admin_tmp/allUsers.html',
        controller: 'AllUsersCtrl'
    });
    $routeProvider.when('/admin/categories',{
        templateUrl: 'templates/admin_tmp/allCategories.html',
        controller: 'AllCategoriesCtrl'
    });
    $routeProvider.when('/admin/categories',{
        templateUrl: 'templates/admin_tmp/addCategory.html',
        controller: 'AddCategoryCtrl'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });  
                                           
//    localStorageServiceProvider.setStorageType('localStorage');    
//    localStorageServiceProvider.setPrefix('adsApp');
}]);