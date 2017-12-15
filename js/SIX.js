function createAnother(original){
    var clone = new object(original);
    clone.sayHi = function(){
        console.log("hi");
    }
    return clone;
}
var person = {
    name:"haohao",
    friends:["hhh","kkll","jkll"]
}

var person1 = createAnother(person);
person1.sayHi();
console.log(person1.name)