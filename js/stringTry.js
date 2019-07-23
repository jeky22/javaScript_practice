
var sentence = "Hi, my name is Sam!";
var hi = sentence.substring(sentence.indexOf("Hi"), 3);
var my_name = sentence.substring(4);
var Sam = sentence.substring(sentence.indexOf("Sam"));
var hi_sam = hi.concat(" ", Sam);
var name = sentence.substring(sentence.indexOf("name"), 11);
var Sam2 = sentence.substring(sentence.indexOf("Sam"), sentence.indexOf("Sam") + "Sam".length);

document.getElementById("sentence").innerHTML = sentence;
document.getElementById("demo01").innerHTML = hi;
document.getElementById("demo02").innerHTML = my_name;
document.getElementById("demo03").innerHTML = hi_sam;
document.getElementById("demo04").innerHTML = name;
document.getElementById("demo05").innerHTML = Sam2;

// -------------------------------------------------------------
var str1 = 'JavaScript Program to illustrate split() function';
str1 = str1.split(" ");

document.getElementById("str1").innerHTML = str1;
document.getElementById("demo06").innerHTML = str1[0];
document.getElementById("demo07").innerHTML = str1[1];
document.getElementById("demo08").innerHTML = str1[2];
document.getElementById("demo09").innerHTML = str1[3];
document.getElementById("demo10").innerHTML = str1[4];
document.getElementById("demo11").innerHTML = str1[5];

// -------------------------------------------------------------
var str2 = '10, 20, 30, 40, 50';
str2 = str2.split(", ");

document.getElementById("str2").innerHTML = str2;
document.getElementById("demo12").innerHTML = str2[0];
document.getElementById("demo13").innerHTML = str2[1];
document.getElementById("demo14").innerHTML = str2[2];
document.getElementById("demo15").innerHTML = str2[3];
document.getElementById("demo16").innerHTML = str2[4];