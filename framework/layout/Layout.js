/**
* Bridge Design Pattern
* Abstraction Sub Class
*/
(function(angular){
    
    function LayoutController(){}
    LayoutController.$inject=[];
    LayoutController.prototype = Object.create(ALayout.prototype);
    LayoutController.prototype.constructor=LayoutController;

    angular.module('layout', [])
    .directive('gwLayout', function LayoutDirective(){
        return {
            restrict: 'C',
            controller: LayoutController,
            controllerAs: 'gwLayoutCtrl',
            require:'gwLayout',
            compile:function(tEle, tAttr){
                return {
                    pre: function(scope, iEle, iAttr, gwLayoutCtrl){
                        
                    },
                    post: function(scope, iEle, iAttr, gwLayoutCtrl){
                        iEle.ready(function () {
                            gwLayoutCtrl.setLayoutImp(new JqLayout(iEle));
                        });
                    }
                };
            }
        };
    })
    .directive('gwLayoutTop',function(){
        return {
            restrict: 'C',
            compile: function (tEle) {
                tEle.addClass('ui-layout-north');
            }
        };
    })
    .directive('gwLayoutCenter', function () {
        return {
            restrict: 'C',
            compile: function (tEle) {
                tEle.addClass('ui-layout-center');
            }
        };
    })
    .directive('gwLayoutLeft', function () {
        return {
            restrict: 'C',
            compile: function (tEle) {
                tEle.addClass('ui-layout-west');
            }
        };
    })
    .directive('gwLayoutRight', function () {
        return {
            restrict: 'C',
            compile: function (tEle) {
                tEle.addClass('ui-layout-east');
            }
        };
    });
})(angular);