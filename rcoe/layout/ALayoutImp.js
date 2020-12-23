/**
* Bridge Design Pattern
* Implementor
*/

/**
* Adapter Design Pattern
* Target
*/
function ALayoutImp($ele){
}
Object.assign(ALayoutImp.prototype,{
    closeMenuPanel:function(){
        throw new SyntaxError('closeMenuPanel() function does not override yet.');
    },
    openMenuPanel:function(){
        throw new SyntaxError('openMenuPanel() function does not override yet.');        
    },
    closeErrorPanel:function(){
        throw new SyntaxError('closeErrorPanel() function does not override yet.');
    },
    openErrorPanel:function(){
        throw new SyntaxError('openErrorPanel() function does not override yet.');
    }
});