function scuberGreetingForFeet(someValue){
  // Write your code here!
 let ride
 if (someValue <= 400) {
  ride = "This one is on me!"
 } else if (someValue <= 2500){
  ride = "I will gladly take your thirty bucks."
 } else {
  ride = "No can do."
 }
 return ride
}
scuberGreetingForFeet(199)
scuberGreetingForFeet(2001)
scuberGreetingForFeet(2501)

function ternaryCheckCity(city){
  // Write your code here!
  let message
  if (city === "NYC") {
    message = "Ok, sounds good."
  }else {
    message = "No go."
  }
  return message
}
ternaryCheckCity("NYC")
ternaryCheckCity("Pittsburgh")

function switchOnCharmFromTip(tip){
  // Write your code here! 


switch (tip) {
  case "generous": 
    return "Thank you so much.";
    break;
  
  case "not as generous": 
  return "Thank you.";
    break;
  
  default: 
    return "Bye.";
}
}


// switch (description) {
//  case "not as generous":
//   return "Thank you so much."
//   break;
//   case "thanks for everything":
//     return "Bye."
//     break;
//     default:
//       return "Thank you so much."
  
// }

  // let text 
  // if (tip == "generous") {
  //   text = "Thank you so much."
  // } else if (tip !== " generous") {
  //   text = "Thank you."
  // } else {
  //   text = "Bye."
  // }
  // return text
  
// control flow done
