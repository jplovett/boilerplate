function getSearchParams(k) {
    var p = {};
    location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(s, k, v) { p[k] = v })
    return k ? p[k] : p;
}

function getCheckboxValue(cbxValue) {
    return (cbxValue ? true : false);
}

function msieversion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > -1) {
        return true
    } else if (navigator.userAgent.match(/Trident.*rv\:11\./)) {
        return true;
    } else {
        return false;
    }
}
