function getJSON(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        callback(this.responseText)
    };
    xhr.open('GET', url, true);
    xhr.send();
}

function mydata(url, callback) {
    getJSON(url, data => callback(JSON.parse(data)));
}

//import file into working document and call mydata function
//Pass as Arguments:-
// url - this is the url data will be retrieved from. 
// callback - create a function with one parameter that allows you use the retrieved data from url.

mydata('', data => {
    console.log(data);
})