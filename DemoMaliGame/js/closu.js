function A(){
    var i=0;
    function b(){
        window.alert(i++);
    }
    return b;
}
var c=A();
c();
c();