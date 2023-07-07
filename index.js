// Code your solutions in this file
//for(let age = 30; age < 40; age++){
  //  console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
//}

//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts){
  //  for (let i = 0; i < gifts.length; i++){
    //    console.log(`Wrapped ${gifts[i]} and added a bow!`)
      //  debugger;
    //}


    //return gifts;

//}


function writeCards(name, event){
  const newArray = [];
  for (let i = 0; i < name.length; i++){
    let messages = `Thank you, ${name[i]}, for the wonderful surprise gift!`
      newArray.push(messages)
  }

  return newArray
   
}

function countDown(number){
  let count = number
  while (count >= 0){
    console.log (count--)
  }
  
}