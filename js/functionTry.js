// 크기비교 function 만들기
function f_compare() {
    var chk1 = document.myform;
    
    if(chk1.num1.value >= chk1.num2.value) {
        document.getElementById("demo01").innerHTML = "output: " + chk1.num1.value; 
        return false;
    } else {
        document.getElementById("demo01").innerHTML = "output: " + chk1.num2.value;
        return false; 
    }
}


// 동일 단어 제외 문장 출력 function 만들기 : str 값 변화 없음.
var str1 = 'HTML element has been changed';

function f_subStringWithText(str1, chk2) {
    document.getElementById("demo02").innerHTML = str1.replace(chk2, "");
    return false;
}


// 문자 위치 바꾸는 function 만들기 : str 값 변화 없음.
var str2 = 'HTML element CSS';

function f_getTextAndreplace(str2, chg1, chg2) {
    var str3 = str2.replace(chg1, chg2);

    document.getElementById("demo04").innerHTML = chg1.concat(" element ", str3);
    return false;
}