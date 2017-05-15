var myApp = angular.module("myApp", ['ui.router']);
myApp.config(function ($stateProvider, $urlRouterProvider) {
    // $urlRouterProvider.when("", "/Page1");
    $urlRouterProvider.otherwise('/Page1');
     //ui.router设置
    $stateProvider
        .state("/Page1", {
            url: "/Page1",
            views:{ //在一个状态内设置多个命名视图
                "":{
                    templateUrl: "Page1.html"
                },
                "contents":{
                    templateUrl: "Page4.html"
                }
            }
        })
        .state("/Page2", {
            url:"/Page2",
            templateUrl: "Page2.html",
            controller: 'InboxController'
        })
        .state("/Page3", {
            url:"/Page3",
            templateUrl: "Page3.html"
        })
        .state("/Page5", { //嵌套路由
            url:"/Page5",
            template: "<div style='text-align: center;color: green;'><h1>555555内容</h1>" +
            "<a href='' ui-sref='/Page5.UI'>点击出现路由嵌套</a>" +
            "<div ui-view=''></div>" +
            "</div>"
        })
        .state("/Page5.UI", {
            url:"/Page5.UI",
            template: "<div style='text-align: center;color: green;'><h1>555555UI内容</h1></div>"
        })
});

myApp.controller('InboxController',function ($scope,$location) {
     $scope.contents ="页面2";
})
