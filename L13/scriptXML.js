function fetchXML(url, callback, id) {
    fetch(url)
        .then(r => r.text())
        .then(text => {
            const parser = new DOMParser();
            callback(parser.parseFromString(text, "text/xml"), id);
        });
}

function XHRXml(url, callback, id) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = (ev) => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const response = xhr.responseXML;
            callback(response, id);
        }
    };

    xhr.open("GET", url);
    xhr.send();
}