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
function inter(){
    var newWindow=window.open("newWindow.html","_blank");
}
function checkU(){
    if($('uname').nodeValue()=="char"&&$("pwd").nodeValue()=="123"){
        alert('ok');
        return true;

    }else{
        $('uname').nodeValue()="";
        alert('ono');
        return false;
    }
}
function $(id){
    return document.getElementById(id);
}
function checkH(){
    var hobbies=document.getElementsByName("hobby");
    for(var i=0;i<hobbies.length;i++){
        if(hobbies[i].checked)
        {
            alert("ok");
            alert("your hobby is"+hobbies[i].value);
        }
    }
}
function findTag(){
    var myObjs=document.getElementsByTagName("input");
    for(var i=0;i<myObjs.length;i++){
        window.alert(myObjs[i].value);
    }
}
function god(){
    var myElement=document.createElement("input");
    myElement.value="god";
    myElement.type="button";
    myElement.id="Adam"
    // myElement.href="http://www.spe.kim";
    // myElement.innerText="go to spe";
    document.getElementById("world").appendChild(myElement);
}
function godD(){
    // document.getElementById("world").removeChild(document.getElementById("Adam"));
    //flexble
    document.getElementById("Adam").parentNode.removeChild(document.getElementById("Adam"));
}
//sun raise sun down
directX=1;
directY=1;
var mySun=document.getElementById('sun');  
var sunTop=mySun.style.top; 
var sunLeft=mySun.style.left; 
sunX=10;
sunY=10;

var divG=document.getElementById("cssDriver");


function sunMove(){
    
    sunX+=directX;
    sunY+=directY;
    //change
    sun.style.top=sunY+"px";
    sun.style.left=sunX+"px";
    if(sunX+sun.offsetWidth>=divG.clientWidth+10||sunX<=9){
        directX=-directX;
    }
    if(sunY+sun.offsetHeight>=divG.clientHeight+10||sunY<=9){
        directY=-directY;
    }
}
// window.alert(sunTop.substr(0,sunTop.length-2));  
setInterval("sunMove()",10);
// setTimeout("deletew()",5000);
