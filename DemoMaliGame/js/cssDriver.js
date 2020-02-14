function change(eventObj){
    if(eventObj.value=="black"){
        var div=document.getElementById('cssDriver');
        div.style.backgroundColor="black";
    }
    if(eventObj.value=="r e d"){
        var div=document.getElementById('cssDriver');
        div.style.backgroundColor="red";
    }
}

function chanout(eventObj){
    var ocssRules = document.styleSheets[0].rules;
    var style1=ocssRules[5];
    if(eventObj.value=="black"){
        style1.style.backgroundColor="blue";
    }
    if(eventObj.value=="r e d"){
        style1.style.backgroundColor="green";
    }
}

function forbidCopy(){
    window.alert('hi');
    return false;
}

/*function forbidFocus(){
    window.alert('hi');
    return false;
}*/