// Code your solutions in this file
let names = ["Guadalupe", "Ollie", "Aki"]
let messages=[]

function writeCards(names, event) {
    const messages =[]
    for (let i = 0; i < names.length; i++) {
    const message=(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    messages.push(message)
  }
  return messages
}
console.log(writeCards(names, "Surprise"))

function countDown(number){
        while (number >= 0) {
          console.log(number);
          number--; 
        }
      }
countDown(10);
