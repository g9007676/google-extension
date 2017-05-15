var getDomTags = function(tags) {
    var tags_str = tags.toString();
    return $(tags_str, document);
}

var tags = getDomTags(['script', 'meta']);
console.log(tags);

var verifGa = function(htmlTags) {
    var script_config = [
        'ga.js', //Google Analytics 
        'dc.js', //Google Analytics Remarketing
        'analytics.js', //Google Universal Analytics
        'ga_exp.js', //Google Analytics Experiments
        'gtm.js' //Google Tag Manager
    ];

    $.each(htmlTags, function(){
        console.log(this);
    });

//    var meta_config = [];
}
verifGa(tags);

//var DOMtoString = function() {
//    node = document_root.firstChild;
//    while (node) {
//        switch (node.nodeType) {
//            case Node.ELEMENT_NODE:
//                html += node.outerHTML;
//                break;
//            case Node.TEXT_NODE:
//                html += node.nodeValue;
//                break;
//            case Node.CDATA_SECTION_NODE:
//                html += '<![CDATA[' + node.nodeValue + ']]>';
//                break;
//            case Node.COMMENT_NODE:
//                html += '<!--' + node.nodeValue + '-->';
//                break;
//            case Node.DOCUMENT_TYPE_NODE:
//                // (X)HTML documents are identified by public identifiers
//                html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
//                break;
//        }
//        node = node.nextSibling;
//    }
//
//    return html;
//}

//console.log(document);

//var parserHtmlTags = [
//    'script'
//];
//var parserHtml = function(htmltags){
//
//    var $doc = new DOMParser().parseFromString(htmltags, "text/html");
//    $meta = $('meta', $doc);
//    console.log($meta);
//}


//chrome.runtime.sendMessage({
//    action: "getSource",
//    source: DOMtoString(document)
//});
