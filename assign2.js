function finddollar() {
    var num1 = document.getElementsByName("num1")[0].value;
    var ERU = Number(num1) *0.90;
    
    document.getElementsByName("convart eru")[0].value = ERU;

}
function findrupi() {
    var num1 = document.getElementsByName("num1")[0].value;
    var GBP = Number(num1) *.77;
    
    document.getElementsByName("convart gbp")[0].value = GBP;

}