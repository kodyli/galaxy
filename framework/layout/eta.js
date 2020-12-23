(function(angular){
    angular.module('gw.widgets.layout',[])
    .value('layoutSetting',{
        applyDemoStyles: true,
        north: {
            size: 95,
            spacing_open: 0,
        },
        west: {
            size: 300,
            spacing_open: 15,
            spacing_closed: 15
        },
        east: {
            initClosed: true,
            spacing_open: 15,
            spacing_closed: 15
        }
    })
    .factory('layout',function($rootScope){
        var layoutService ={};
        
        layoutService.layout =null;
        
        layoutService.resize = function(){
            $rootScope.$broadcast('pane_resize',{});
        };
        
        layoutService.getErrorsObj = function(){
            return this.layout.find('#error-panel ol').scope().errors;
        };
        
        return layoutService;
    })
    .controller('LayoutController',function($rootScope, $scope, layout){
        $scope.layout = layout.layout;
        
        $scope.openErrorPane = function(){
            $scope.layout.open('east');
        };
        
        $scope.closeErrorPane = function(){
            $scope.layout.close('east');
        };
        
        $rootScope.$on('screenSelected',function(){
            $scope.layout.close('west');
        });
    })
    .directive('mainLayout', function(layoutSetting, layout){
        return {
            controller: 'LayoutController',
            restrict: 'C',
            link: function(scope, iEle){
                layoutSetting.onresize=function(){
                    layout.resize();
                };
                scope.layout = layout.layout = iEle.layout(layoutSetting);
            }
        };
    })
    .directive('menuPane', function(){
        return {
            restrict: 'C',
            link: function(scope, iEle){
                iEle.addClass('ui-layout-west');
            }
        };
    })
    .directive('errorPane', function(){
        return {
            restrict: 'C',
            link: function(scope, iEle){
                iEle.addClass('ui-layout-east');
            }
        };
    });
})(angular);