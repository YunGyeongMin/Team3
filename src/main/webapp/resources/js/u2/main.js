/**
 *  mainPage JS
 */
function choseItem(no, pno, target) {
    const item = target;
    if (item.innerHTML == "♡") {
        var params = {
            no: no,
            pno: pno,
        };
        $.ajax({
            url: "/setChose",
            type: "post",
            data: JSON.stringify(params),
            contentType: "application/json; charset=UTF-8"
        }).done(function(data) {
            console.log(data);
            if (data > 0) {
                item.innerHTML = "♥";
                $("#itemArea").load(window.location.href + "#itemArea");
            }
        });
    } else {
        var dno = target.parentNode.querySelector(".no").value;
        var params = {
            no: no,
            dno: dno
        };
        $.ajax({
            url: "/delChose",
            type: "post",
            data: JSON.stringify(params),
            contentType: "application/json; charset=UTF-8"
        }).done(function(data) {
            console.log(data);
            if (data > 0) {
                item.innerHTML = "♡";
                $("#itemArea").load(window.location.href + "#itemArea");
            }
        });
    }
}
