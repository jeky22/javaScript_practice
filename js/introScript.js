var str = "Please locate where 'locate' occurs!"; // 변수 지정
var pos01 = str.indexOf("locate"); // 동일 문자 위치
var res = str.substring(7, 13); // 문자열 자름
var rep = str.replace("locate", "domastic"); // 동일 문자열 변경

document.getElementById("demo01").innerHTML = pos01;
document.getElementById("demo02").innerHTML = str.length; // 문자열길이
document.getElementById("demo03").innerHTML = res;
document.getElementById("demo04").innerHTML = rep;