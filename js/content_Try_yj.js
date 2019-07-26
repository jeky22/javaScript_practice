$(function() {
    // try1
    $("#discovery").click(function() {
        $("#set1").text("");
    });
    $("#atlantis").click(function() {
        $("#set1").html("<b>Note: </b>Click the above buttons to set the value of following input box.");
    });
    $("#endeavour").click(function() {
        $("#set1").text($("#set1").text() + $("#set2").text());
    });

    // --------------------------------------------------------------------------------------------------------
    // try2
    // 체크 박스 모두 체크
    $("#btnToggle").click(function() {
        $("input[name=chk]:checkbox").each(function() {
            $(this).attr("checked", true);
        });
    });

    // --------------------------------------------------------------------------------------------------------
    // try3
    $("#gName").click(function() {
        $("#get1").text("Name value: " + $("#name").val());
    });
    $("#gComment").click(function() {
        $("#get2").text("Comment value: " + $("#comment").val());
    });
    $("#gCity").click(function() {
        $("#get3").text("City value: " + $("#city").val());
    });
});