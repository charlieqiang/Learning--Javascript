function Maste(){
    this.feed=function(animal,food){
        window.alert(animal.constructor);
        document.write("master give "+animal.name+" a "+food.name);
    }
}

function Food(name){
    this.name=name;

}
function Fish(name){
    this.food=Food;
    this.food(name);
}
function Bone(name){
    this.food=Food;
    this.food(name);
}
function Animal(name){
    this.name=name;
}
function Cat(name){
    this.animal=Animal;
    this.animal(name);
}
function Dog(name){
    this.animal=Animal;
    this.animal(name);
}

var cat=new Cat("miao");
var dog=new Dog("wang");
var fish=new Fish("fish");
var bone=new Bone("bone");

var master=new Maste();
master.feed(cat,fish);
master.feed(dog,fish);
