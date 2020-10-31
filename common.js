$(document).ready(function () {

    $("#form").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $('.popup').removeClass("n-active-popup");
            $('.popup').addClass("active-popup");
            $("#form").trigger("reset");
        });
        return false;
    });

});
