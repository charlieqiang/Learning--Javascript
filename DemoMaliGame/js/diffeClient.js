if(window.XMLHttpRequest){
    if(!window.ActiveXObject){
        alert('Mozilla,Safari');

    }else{
        alert('IE');
    }
}else{
    alert('IE6');
}