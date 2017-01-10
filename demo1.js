var coords= function(location){
  var parts= location.toString().split(",");
  this.latitude=parts[0];
  this.longitude=parts[1];

}
//console.log("this should work");
//console.log(coords);

Object.defineProperty(coords.prototype,"latPos",{
  get:function(){return "lat"+this.latitude+"lon"+this.longitude;
},
  set:function(location){
    var parts= location.toString().split(",");
    this.latitude=parts[0];
    this.longitude=parts[1];
  }
});

var mumbai = new coords("123,345");
//console.log(mumbai.latPos);

var rectangle = function(len,bre){
  this.len=len;
  this.bre= bre;
}

rectangle.prototype.area= "";

rectangle.prototype={
  set dimensions(len){this.len=len;},
  get dimensions(){return this.len +","+this.bre;},
  get area(){ return this.area=this.bre*this.len;}
}

var rect= new rectangle(5,4);
rect.dimensions=5;
//console.log(rect.dimensions+"--"+rect.area);

var vehicle = function(){
  this.name = "vehicle"
}

var extend = function(child , parent){
  child.prototype=new parent();
  child.prototype.constructor= child;
}


vehicle.prototype={
  drive:function(){
    return this.name +"drives forward";
  },
  stop:function(){
    return this.name +"has stopped";

  }

}

var truck =function(name){
  this.name= name;

}

truck.prototype=new vehicle();
truck.prototype.constructor=truck;

truck.prototype.drive=function(){
  var drivemsg = vehicle.prototype.drive.apply(this);
  return drivemsg+" bla ";
}

var jeep = new truck('jeep');
extend(jeep,vehicle);
//console.log(jeep.drive());
//console.log(jeep.stop());

//es6

var addstuff={
  sum(num1,num2)
  {
    return num1+num2;
  }
}

console.log("sum is"+addstuff.sum(6,5));


class person {
  constructor(name) {
    this.name= name;
  }

  getPos(){
    return this.name;
  }

  static getPerson(){
    return new person("no name");
  }
}

var ben = new person("ben");
console.log("my name is "+ben.getpos());


class animal {
  constructor(name,sound){
    this.name= name;
    this.sound= sound;
  }

  speak(){
    return this.name+" says "+this.sound;
  }

}

class dog extends animal{
  speak(){
    return super.speak()+"iz dog";
  }
}




