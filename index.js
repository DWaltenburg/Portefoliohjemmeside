$(document).ready(function () {
    $.ajax({
        url: "data.json",
        crossDomain: true,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        dataType: "json",
        success: function (data) {
            console.log(data);
        },
        error: function (xhr, status) {
            console.log("error");
        }
    });

    $("#search").click(function () {
        $("#my-list").append("<li>" + $("#searchTerm").val() + "</li>");
    });
    array = ["1", "2", "3", "4", "5", "6"]
    array.forEach(element => {
        $(".row").append('<div class="card col-md-2"\>' +
            '<img src = "Portrait_Placeholder.png" class= "card-img-top" alt = "Portrait">' +
            '<div class="card-body">' +
            '<h5 class="card-title">Navn</h5>' +
            '<p class="card-text">Beskrivelse</p>' +
            '<a href="#" class="btn btn-primary">Gå til portefolio</a>' +
            '</div>' +
            '</div >')
    });
});