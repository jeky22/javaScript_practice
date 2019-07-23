var str = "Please locate where 'locate' occurs!"; // 변수 지정
var str02 = "Good!";
var concat = str02.concat(" ", str);
var str03 = " Hello World! ";
var trim = str03.trim();
var splitcommas = "abc, c,|d, e";
var splitspaces = "a bb,bnn, c,|d,   e";
var splitsign = "a,b, c,|d, e";
splitcommas=splitcommas.split(','); // Split on commas
splitspaces=splitspaces.split(" "); // Split on spaces
splitsign= splitsign.split("|");

document.getElementById("demo06").innerHTML = trim;
document.getElementById("demo07").innerHTML = splitcommas[0];
document.getElementById("demo08").innerHTML = splitspaces[1];
document.getElementById("demo09").innerHTML = splitsign[0];
