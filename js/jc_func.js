function f_compare(form) {
    var x = form.a.value;
    var y = form.b.value;

    document.getElementById("output").innerHTML = (parseInt(X) > parseInt(Y) ? X : Y);
}
function f_getTextAndoutput(form) {
    var str = form.a.str;
    var tmp = form.b.tmp;
    document.getElementById("output2").innerText = str.split(tmp)[0];
}
function f_getTextAndreplace(form) {
    var str = form.str.value;
    var tmpA = form.a.value;
    var tmpB = form.b.value;
    var tmp = "thisistemp";
    var result = str.replace(tmpA, tmp);
    result = result.replace(tmpB, tmpA);
    result = result.replace(tmp, tmpB);
    document.getElementById("output3").innerText = result;
}

function func(form) {
    switch (form.name) {
        case "myform":
            f_compare(form);
            break;
        case "myform2":
            f_getTextAndoutput(form);
            break;
        case "myform3":
            f_getTextAndreplace(form);
            break;

    }
    return false;
}

