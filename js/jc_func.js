function f_compare(X,Y) {
  
    document.getElementById("output").innerHTML = (parseInt(X) > parseInt(Y) ? X : Y);
    return false;
}
function f_getTextAndoutput(str,tmp) {
    
    document.getElementById("output2").innerText =str.replace(tmp, "");
    return false;
}
function f_getTextAndreplace(str, tmpA, tmpB) {
    var tmp = "thisistemp";
    var result = str.replace(tmpA, tmp);
    result = result.replace(tmpB, tmpA);
    result= result.replace(tmp, tmpB);
    document.getElementById("output3").innerText =result;
    return false;
}
