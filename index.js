$(document).ready(function () {
    array = [];

    $.ajax({
        url: "data.json",
        crossDomain: true,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        dataType: "json",
        success: function (data) {
            array = json2array(data);
            showCards(data);
        },
        error: function (xhr, status) {
            console.log("error");
        }
    });

    $("#searchTerm").on("input", function () {
        if ($("#searchTerm").val() == "") {
            showCards(array);
        } else {
            const filteredData = array.filter(item => item.name.toLowerCase().includes($("#searchTerm").val().toLowerCase()));
            console.log(filteredData);
            showCards(filteredData);
        }
    });
});
function showCards(array) {
    $(".row").empty();
    array.forEach(element => {
        $(".row").append('<div class="card col-md-5 my-3"\>' +
            '<img src = "Portrait_Placeholder.png" class= "card-img-top" alt = "Portrait">' +
            '<div class="card-body">' +
            '<h5 class="card-title">' + element.name + '</h5>' +
            '<p class="card-text">' + element.description + '</p>' +
            '<a href="#" class="btn btn-primary">Gå til portefolio</a>' +
            '</div>' +
            '</div >')
    });
}
function json2array(json) {
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function (key) {
        result.push(json[key]);
    });
    return result;
}