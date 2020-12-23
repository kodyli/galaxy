function AGridImp(){}
Object.assign(AGridImp.prototype,{
    addRow:function(rowData){
        throw new SyntaxError('addRow() function does not override yet.');
    },
    selectRow:function(rowId){
        throw new SyntaxError('selectRow() function does not override yet.');
    },
    getSelectedRowId:function(){
        throw new SyntaxError('getSelectedRowId() function does not override yet.');
    },
    getRow:function(rowId){
        throw new SyntaxError('getRow() function does not override yet.');
    }
})