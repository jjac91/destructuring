// 8 and 1846 respectively
//{yearNeptuneDiscovered :1846, yearMarsDiscovered: 1659}
//"your name is Alejandro and you like purple"
//your name is Meliis and you like green
// your name is undefined and you like green

//Maya
//Marisa
//Chi
//Raindrops on roses
//whiskers on kittens
//["Bright copper kettles","warm woolen mittens","Brown paper packages tied up with strings"]
// [10,30,20]

var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  var a = obj.numbers.a;
  var b = obj.numbers.b;

let obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
let {a,b} = obj.numbers

var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

let arr = [1,2]
[arr[0],arr[1]]=[arr[1],arr[0]]

let raceResults = ([first, second, third, ...rest]) =>  ({first, second, third,...rest})