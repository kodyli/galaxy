/**
* Bridge Design Pattern
* Implementor Sub Class
*/

/**
* Adapter Design Pattern
* Adapter
* layout Library is the adaptee.
*/

function JqLayout($ele){
    //layout will not work for div tag without this css;
    $ele.css({
        display: "block",
        width: "100%",
        height: "100%",
        position: "absolute",
        left: "0px",
        right: "0px",
        top: "0px",
        bottom: "0px"
    });
    this.jqlayout = $ele.layout({
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
    });
}
JqLayout.prototype = Object.create(ALayoutImp.prototype);
JqLayout.prototype.constructor=JqLayout;
Object.assign(ALayoutImp.prototype,{
    closeMenuPanel:function(){
        this.jqlayout.close('west');
    },
    openMenuPanel:function(){
        this.jqlayout.open('west');
    },
    closeErrorPanel:function(){
        this.jqlayout.close('east');
    },
    openErrorPanel:function(){
        this.jqlayout.open('east');
    }
});