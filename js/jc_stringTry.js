var sentence = "Hi, my name is Sam!"
var str = "JavaScript Program to ilustrate split() function"
var str2 = "10,20,30,40,50"

console.log(sentence.substring(sentence.indexOf("Hi,"), "Hi,".length));

console.log(sentence.substring(sentence.indexOf("Hi,"), "Hi,".length));

console.log("///////////////");

str = str.split(" ");
for (s in str) {
    console.log(str[s]);
}
console.log("///////////////");
str2 = str2.split(",");
for (s in str2) {
    console.log(str2[s]);
}