var str = "Please locate where 'locate' occurs!";
var str02 = "Good!";
var concat = str02.concat(" ", str);
var str03 = " Hello World! ";
var trim = str03.trim();
var splitcommas = "a,b, c,|d, e";
var splitspaces = "a,b, c,|d, e";
var splitsign = "a,b, c,|d, e";

splitcommas.split(",");
splitspaces.split(" ");
splitsign.split("|");

document.getElementById("demo07").innerHTML = splitcommas[0];
document.getElementById("demo08").innerHTML = splitspaces[1];
document.getElementById("demo09").innerHTML = splitsign[2];