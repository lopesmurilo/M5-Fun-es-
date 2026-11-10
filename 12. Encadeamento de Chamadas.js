function fakeRequest(url, callback) {
    setTimeout(function() {
        callback(null, "OK");
    }, 1000);
}

fakeRequest("https://site1.com", function(error, response) {
    console.log("Primeira requisição:", response);

    fakeRequest("https://site2.com", function(error, response) {
        console.log("Segunda requisição:", response);

        fakeRequest("https://site3.com", function(error, response) {
            console.log("Terceira requisição:", response);
        });
    });
});