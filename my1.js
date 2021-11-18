function getHistory() {
    return document.getElementById("history-value").innerText;
}
function printHistory(num) {
    document.getElementById("history-value").innerText=num;
}
function printOutput(num) {
    document.getElementById("output-value").innerText;
}
function getOutput() {
    document.getElementById("output-value").innerText=getFormatted(num);
}
function getFormattedNumber(num) {
    var n = Number (num);
    var value = n.toLocaleString("en");
    return value;
}
printOutput("9999");