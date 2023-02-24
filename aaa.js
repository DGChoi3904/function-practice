let pokemon = ["피카츄", "라이츄", "파이리"];
let onepiece = {
  case1 : 1,
  case2 : 2,
  case3 : 3,
  case4 : 4
}
console.log(pokemon[0]);
console.log(onepiece.length);
for(let i=0; i < pokemon.length; i++) {
  console.log(pokemon[i]);
}
function createArrayWithNum(total){
  let thisArray = new Array();
  for(let i=0; i < total; i++){
    thisArray.push(i);
  }
  return thisArray;
}
console.log(typeof(pokemon));
function logAll (array) {
  if(array.length !== undefined){
    for(let i=0; i < array.length; i++) {
        console.log(array[i]);
    }
  }else{
    console.log("You put the wrong varibles boy!");
  }
}
let numTwenty = createArrayWithNum(20);
let ten = 10;
logAll(onepiece);
logAll(numTwenty);
logAll(ten);
