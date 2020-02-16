function change(val,obj){
    obj.style.backgroundColor='orange';
    if(val=='zs'){
        zs.style.display='block';
        rz.style.display='none';
    }
    else if(val=='rz'){
        zs.style.display='none';
        rz.style.display='block';
    }
}
function change2(obj){
    obj.style.backgroundColor='silver';
}
function shop(obj){
    //check all
    
    var friuts=document.getElementsByName("fruit");
    var totalPrice=0;
    // alert(friuts.length);
    for(var i=0;i<friuts.length;i++){
        if(friuts[i].checked){
            totalPrice+=parseFloat(friuts[i].value);
        }

    }
    myspan.innerText="$"+totalPrice+".00";
}

//Course
var last_select_num=3;
var myOption=document.createElement("OPTION");
myOption.value="java";
myOption.text="java";
myCourse.add(myOption);
//
myOption=document.createElement("OPTION");
myOption.value="oracle";
myOption.text="oracle";
myCourse.add(myOption);
//
myOption=document.createElement("OPTION");
myOption.value="j2ee";
myOption.text="j2ee";
myCourse.add(myOption);

function getCourse(){
    myAres.value+="chosed "+myCourse.value+"!\r\n";
}

function selectCheck(obj){
    // alert(document.getElementById("myselect").checked);
    var friuts = document.getElementsByName("fruit");

    if(document.getElementById("myselect").checked){
        
        for(var i=0;i<friuts.length;i++){
            friuts[i].checked=true;
        }
    }else{
        for(var i=0;i<friuts.length;i++){
            friuts[i].checked=false;
        }
    }
}

function checkinfo(){
    // alert("ok");
    // document.forms[0].username
}

function reg(){
    var con=document.getElementById("myAres");
    // alert(con.value);
    // var myReg=/(\d){4}/gi;
    var myReg=new RegExp("(\\d){4}","gi");
    while(res=myReg.exec(con.value)){
        alert("found!"+res);
    }
}