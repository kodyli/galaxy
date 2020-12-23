/**
* Bridge Design Pattern
* Abstraction
*/
function ALayout(){
    this.layoutImp = null;
}
Object.assign(ALayout.prototype,{
    /**
    * @param layout ALayoutImp  
    */
    setLayoutImp:function(layout){
        if(layout instanceof ALayoutImp){
            this.layoutImp = layout;
        }else{
            throw new TypeError('layout is not an instance of layout/ALayoutImp.');
        }
    },
    closeMenuPanel:function(){
        this.layoutImp.closeMenuPanel();
    },
    openMenuPanel:function(){
        this.layoutImp.openMenuPanel();
    },
    closeErrorPanel:function(){
        this.layoutImp.closeErrorPanel();
    },
    openErrorPanel:function(){
        this.layoutImp.openErrorPanel();
    }
});