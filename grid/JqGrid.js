function JqGrid($table, config){
    var _config ={
        datatype: "local",
        cellEdit: true,
        cellsubmit: "clientArray",
        data:[
            {
                orderId:1,
                customerId:1
            },
            {
                orderId:1,
                customerId:2
            }
        ]
    };
    Object.assign(_config,config);
    this.jqgrid = $table.jqGrid(_config);
}
JqGrid.prototype = Object.create(AGridImp.prototype);
JqGrid.prototype.constructor=JqGrid;
Object.assign(JqGrid.prototype,{
    addRow:function(rowData){
        var rowId = this._getLastRowId()+1;
        this.jqgrid.addRowData(rowId, rowData, "last");
        return rowId;
    },
    selectRow:function(rowId){
        //if the sceond paramter is not true, jqgrid does not trigger the onSelectRow event.
        this.jqgrid.setSelection(rowId, true);
    },
    getSelectedRowId:function(){},
    getRow:function(rowId){
        return this.jqgrid.getRowData(rowId);
    },
    _getLastRowId:function(){
        var rowIds = this.jqgrid.getDataIDs();
        if (rowIds.length > 0) {
                var max = rowIds.reduce(function (a, b) {
                return Math.max(parseInt(a), parseInt(b));
            });
            return max;
        }
        return 0;
    }
});