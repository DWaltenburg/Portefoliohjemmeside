$(document).ready(function () {
    // $.ajaxSetup({
    //     headers: {
    //         'Access-Control-Allow-Origin': '*'
    //     }
    // });
    // $.getJSON("https://github.com/DWaltenburg/Portefoliohjemmeside/raw/main/data.json", {}, function (data) {
    //     console.log(JSON.stringify(data));
    // }).fail(function () {
    //     console.log("An error has occurred.");
    // });
    $.ajax({
        url: "http://dwaltenburg.github.io/Portefoliohjemmeside/data.json",
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
        // alert( "Handler for .click() called." );
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