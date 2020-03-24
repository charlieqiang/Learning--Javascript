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
    myElement.id="Adam";
    myElement.οnclick="window.open('http://www.spe.kim')";
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
function changeTank(obj){
    
    if(obj.value=="👆"){
        
        tank.style.backgroundPositionY="0px";
    }
    else if(obj.value=="👇"){
        
        tank.style.backgroundPositionY="110px";
    }
    else if(obj.value=="👉"){
        tank.style.backgroundPositionY="161px";
    }
    else if(obj.value=="👈"){
        tank.style.backgroundPositionY="55px";
    }
}
function MyTank(x,y,direct){

    this.x=x;
    this.y=y;
    this.direct=direct;
    this.speed=10;
    //init
    tank.style.left=this.x+"px";
    tank.style.top=this.y+"px";
    tank.style.backgroundPositionY="0px";

    // a3\s2\d1\w0
    this.move=function move(event){
        switch(event.keyCode){
            case 65://a
                this.x-=this.speed;
                this.direct=3;
                tank.style.backgroundPositionY="55px";
                break;
            case 83://s
                this.y+=this.speed;
                this.direct=2;
                tank.style.backgroundPositionY="110px";
                break;
            case 68://d
                this.x+=this.speed;
                this.direct=1;
                tank.style.backgroundPositionY="161px";
                break;
            case 87://w
                this.y-=this.speed;
                this.direct=0;
                tank.style.backgroundPositionY="0px";
                break;
        }    
        //change
        tank.style.left=this.x+"px";
        tank.style.top=this.y+"px";
    }
}

function dosomething(event){
    if(event.keyCode==)
}
var hero = new MyTank(1240,200,1);
// window.alert(sunTop.substr(0,sunTop.length-2));  
setInterval("sunMove()",10);
// setTimeout("deletew()",5000);
