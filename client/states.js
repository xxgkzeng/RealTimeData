angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.mainpage', {
        views: {
            app: {
                controller: 'app_mainpage',
                templateProvider: function (app) {
                    return app.templateProvider('app.mainpage');
                }
            }
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.loginclassic', {
        views: {
            app: {
                controller: 'app_loginclassic',
                templateProvider: function (app) {
                    return app.templateProvider('app.loginclassic');
                }
            }
        }
    }).state('app.tableviewadvancedconfident', {
        views: {
            app: {
                controller: 'app_tableviewadvancedconfident',
                templateProvider: function (app) {
                    return app.templateProvider('app.tableviewadvancedconfident');
                }
            }
        }
    }).state('app.addform', {
        views: {
            app: {
                controller: 'app_addform',
                templateProvider: function (app) {
                    return app.templateProvider('app.addform');
                }
            }
        }
    });
});