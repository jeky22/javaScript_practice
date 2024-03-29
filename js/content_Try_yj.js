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
    $('#btnToggle').click(function(){
        $('input:checkbox').prop('checked',function(){
            return !$(this).prop('checked');
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

    $("#gAll").click(function() { // for문 이용 - 배열
        var result = $("#allForm").find('form[name=allForm]').val();
        $("#get4").text("All value: " + result);
    });
});