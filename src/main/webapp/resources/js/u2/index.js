$(document).ready(function() {
    function mainList() {
        $.ajax({
            url: "/mainList",
            type: "post"
        }).done(function(data) {
            $("#itemArea").html(data);
        });
    }
    mainList();
});
