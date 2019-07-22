var sentence = "Hi, my name is Sam!";
hi = sentence.substring(0, 2);
my = sentence.indexOf("my");
my_Sam = sentence.substring(sentence.indexOf("my"));
hi2 = sentence.substring(0, 3);
name_sub = sentence.indexOf("name");
name = sentence.substring(7, 11)
Sam1 = sentence.substring(15, 18);
Sam2 = sentence.substring(15, 19);

console.log("***** sentence *****")
console.log(hi);
console.log(my_Sam);
console.log(hi2 + " " + Sam2); // 보충 :( !!!
console.log(name);
console.log(Sam1);

// -------------------------------------------------------------
var str1 = 'JavaScript Program to illustrate split() function';
str1 = str1.split(" ");

console.log("***** str1 *****");
console.log(str1[0]);
console.log(str1[1]);
console.log(str1[2]);
console.log(str1[3]);
console.log(str1[4]);
console.log(str1[5]);

// -------------------------------------------------------------
var str2 = '10, 20, 30, 40, 50';
str2 = str2.split(", ");

console.log("***** str2 *****");
console.log(str2[0]);
console.log(str2[1]);
console.log(str2[2]);
console.log(str2[3]);
console.log(str2[4]);