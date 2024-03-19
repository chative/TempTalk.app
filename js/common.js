
function htmlEscape(str){
    return String(str).replace(/[^\w. ]/gi, function(c){
        return '&#'+c.charCodeAt(0)+';';
    });
}

function base64Escape(str) {
    return (String(str).replace(/[^A-Za-z0-9+/=]/g, ''));
}
