// Ugly compability hack for IE: ensure that Node is defined.
if (window && !window['Node']) {
    window.Node = new Object();
    Node.ELEMENT_NODE = 1;
    Node.ATTRIBUTE_NODE = 2;
    Node.TEXT_NODE = 3;
    Node.CDATA_SECTION_NODE = 4;
    Node.ENTITY_REFERENCE_NODE = 5;
    Node.ENTITY_NODE = 6;
    Node.PROCESSING_INSTRUCTION_NODE = 7;
    Node.COMMENT_NODE = 8;
    Node.DOCUMENT_NODE = 9;
    Node.DOCUMENT_TYPE_NODE = 10;
    Node.DOCUMENT_FRAGMENT_NODE = 11;
    Node.NOTATION_NODE = 12;
}
    

// Adding Array.indexOf if it doesn't exist yet.
// http://soledadpenades.com/2007/05/17/arrayindexof-in-internet-explorer/
if(!Array.indexOf){
    Array.prototype.indexOf = function(obj){
	for(var i=0; i < this.length; i++){
	    if(this[i] == obj){
	        return i;
	    }
	}
	return -1;
    }
}



// Try to avoid image flicker on hover.
// See:
// http://www.telerik.com/help/aspnet/tabstrip/tabstrip_imageflicker.html
try {
    document.execCommand("BackgroundImageCache", false, true);
} catch(err) {}
