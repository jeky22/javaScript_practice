document.getElementById("demo01").innerHTML = parseInt("10.33") + "<br>" + parseInt("10 6") + "<br>" + parseInt("years 10"); // 결과 NaN
var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "october", "November", "December"];
document.getElementById("demo02").innerHTML = months[d.getMonth()];
document.getElementById("demo03").innerHTML = Math.random();