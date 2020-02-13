//mario class
function mario(){
    this.x=0;
    this.y=0;
    //move 0->u 1->r 2->d 3->l
    this.move=function(direct){
        var maPos=document.getElementById('myMa');
        this.y=maPos.style.top;
        this.x=maPos.style.left;

        switch(direct){
            case 'w':   
                this.y=parseInt(this.y.substr(0,this.y.length-2));
                maPos.style.top=(this.y-10)+"px";
                break;
            case 's':
                this.y=parseInt(this.y.substr(0,this.y.length-2));
                maPos.style.top=(this.y+10)+"px";
                break;
            case 'd':
                this.x=parseInt(this.x.substr(0,this.x.length-2));
                maPos.style.left=(this.x+10)+"px";
                break;
            case 'a':
                this.x=parseInt(this.x.substr(0,this.x.length-2));
                maPos.style.left=(this.x-10)+"px";
                break;
        }
    }
}

var ma01=new mario();
