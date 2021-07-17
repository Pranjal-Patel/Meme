var HttpClient = function () {
    this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
            }
        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
    }
}
var theurl = 'https://meme-api.herokuapp.com/gimme';
var client = new HttpClient();
document.getElementById('img').src = "../loading.png";
client.get(theurl, function (response) {
    var response1 = JSON.parse(response);
    // alert(response);
    document.getElementById('title').innerHTML = response1.title;
    document.getElementById('img').src = response1.preview[3]; 
});

next = () => {
    document.getElementById('title').innerHTML = "Meming...";
    document.getElementById('img').src = `loading.png`;
    client.get(theurl, function (response) {
        var response1 = JSON.parse(response);
        // alert(response);
        let title = response1.title;
        if (title.length >= 6) {
            title = "  " + title + "  ";
            document.getElementById('title').innerHTML = title;
        }
        else {
            document.getElementById('title').innerHTML = response1.title;
        }
        document.getElementById('img').src = response1.preview[3];
    });
}