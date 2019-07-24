function selectBox() {
    var x = document.getElementById("mySelect01").value;
    document.getElementById("demo01").innerHTML = "Selected : " + x;

    var y = document.getElementById("mySelect02").value;
    document.getElementById("demo02").innerHTML = "Selected : " + y;
}

// --------------------------------------------------------------------

function onSubmit() {
    var chk = document.myform;

    if(chk.firstName.value == "" || chk.firstName.value == null) {
        document.getElementById("demo03").innerHTML = "친구야 입력해보자!";
        return false;
    } else if(chk.lastName.value == "" || chk.lastName.value == null) {
        document.getElementById("demo04").innerHTML = "친구야 입력해보자!";
        return false;
    } else if(chk.userName.value == "" || chk.userName.value == null) {
        document.getElementById("demo05").innerHTML = "친구야 입력해보자!";
        return false;
    } else if(chk.city.value == "" || chk.city.value == null) {
        document.getElementById("demo06").innerHTML = "친구야 어디사니?";
        return false;
    } else if(chk.state.value == "" || chk.state.value == null) {
        document.getElementById("demo07").innerHTML = "친구야 상태는 괜찮니?";
        return false;
    } else if(chk.zip.value == "" || chk.zip.value == null) {
        document.getElementById("demo08").innerHTML = "친구야 zip 파일 좀 올려줘";
        return false;
    } else {
        return true;
    }
    
}