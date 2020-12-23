(function(angular){
    //Grid Controller
    function GridController(){}
    GridController.$inject=[];
    GridController.prototype = Object.create(AGrid.prototype);
    GridController.prototype.constructor=GridController;
    Object.assign(GridController.prototype,{
        save:function(){}
    });
    //Grid Directive
    function GridDirective(){
        return {
            restrict: 'E',
            controller: GridController,
            controllerAs: 'gridCtrl',
            template: '<table></table>',
            require: 'gwGrid',
            compile: function(tEle, tAttr){
                return {
                    pre: function (scope, iEle, iAttr, gridCtrl) {
                        iEle.ready(function () {
                            var table = iEle.children("table").filter(":first");
                            gridCtrl.setGridImp(new JqGrid(table, {
                                colModel: [
                                    {
                                        label: 'OrderID',
                                        name: 'orderId',
                                        key: true,
                                        width: 75
                                    },
                                    {
                                        label: 'Customer ID',
                                        name: 'customerId',
                                        width: 150,
                                        editable: true
                                    }
                                ]
                            }));              
                        });
                    },
                    post: function (scope, iEle, iAttr, gridCtrl) {
                        
                    }
                };
            }
        };
    }
    GridDirective.$inject=[];

    angular.module('grid',[])
    .directive('gwGrid', GridDirective);
})(angular);