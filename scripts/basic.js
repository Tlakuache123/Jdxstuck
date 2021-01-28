let showing = true
var buttonLog = document.getElementById("button-log")

function showLog() {
    if(showing){
        buttonLog.innerHTML = "Hide Pesterlog";
        document.getElementById("chat-log").style.display = "block";
        showing = false;
    }else{
        buttonLog.innerHTML = "Show Pesterlog";
        document.getElementById("chat-log").style.display = "none";
        showing = true;
    }
    
}