$("#anotherJoke").on("click", getJoke);
getJoke();
function getJoke() {
    $.getJSON("http://api.icndb.com/jokes/random", function (data) {
        $("#joke").html(data.value.joke);
    }).fail(function (jqxhr, textStatus, error) {
        var err = textStatus + ", " + error;
        console.log("Request Failed: " + err);
    });
}