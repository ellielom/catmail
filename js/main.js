function input() {

    $("#submit").click(function(){
        var cat_postcard = {
            senderName: $("#sender").val(),
            receiverName: $("#receiver").val(),
            message: $("#message").val()
        }

        localStorage.setItem("cat_postcard", JSON.stringify(cat_postcard));

        window.location.replace("output.html");
    })

}

function output(){
    let cat_postcard = JSON.parse(localStorage.getItem("cat_postcard"));

    let sender = cat_postcard.senderName;
    let receiver = cat_postcard.receiverName;
    let message = cat_postcard.message;

    let output = "<div class='gridMain'><div class='gridLeft'>" +
        "<br><b>From:</b> " + sender + "<br> <br> <b>To:</b>  " + receiver + "<br><br>" +
        "  <b>Message:</b><br><br>" +
        message + "</div>"+
        "<div class='gridRight'>" + "<img src='images/cat.png'>" +
        "</div></div>";

    $(".output").html(output);
}

