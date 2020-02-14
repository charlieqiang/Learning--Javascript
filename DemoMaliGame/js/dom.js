var t=0;
var mytimer=setInterval("showtime()",1000);
function deletew(){
    var res=window.confirm("delete?");
    if(res){
        alert("deleted!");
    }else{
        alert("give up delete.");
    }
}
function showtime(){
    document.getElementById("showtime").innerText=new Date().toLocaleString();
    t++;
    if(t>=5){
        t=0;
        clearInterval(mytimer);
        setTimeout("reRun()",5000);
    }
}
function reRun(){
    mytimer=setInterval("showtime()",1000);
}
setTimeout("deletew()",5000);