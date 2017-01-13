var dog={
  sound:'woof',
  talk:function(){
    return this.sound;

  }
}

// console.log(dog.talk());

var talkFunction= dog.talk;
//console.log("--"+talkFunction());

boundtalk= talkFunction.bind(dog);
console.log(boundtalk())
