function AGrid(){
    this.gridImp = null;
}

Object.assign(AGrid.prototype,{
    /**
    * @param grid AGridImp  
    */
    setGridImp:function(grid){
        if(grid instanceof AGridImp){
            this.gridImp = grid;
        }else{
            throw new TypeError('grid is not an instance of grid/AGridImp.');
        }
    },
    add: function(rowData){
        var rowId = this.gridImp.add(rowData);
        this.gridImp.selectRow(rowId);
    },
    dup: function(){
        var rowId = this.gridImp.getSelectedRowId();
        var rowData = this.gridImp.getRow(rowId);
        this.add(rowData);
    },
    save: function(){
        throw new SyntaxError('save() function does not override yet.');
    }
});
