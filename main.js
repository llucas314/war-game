let cards = [];
const ranks = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace'];
let values = [];
const suits = ['Spades','Clubs','Diamonds','Hearts'];

// initialize values array
for (let i = 0; i < 13; i++){
    values[i] = i + 2;
}

// initialize cards array with card objects
for (let i = 0; i < 4; i++){
    for (let j = 0; j < 13; j++){
       cards.push({
           rank: ranks[j],
           value: values[j],
           suit: suits[i],
           isFlipped: false,
           flipCard: function(){
               if (isFlipped === false){
                   isFlipped = true;
               } else{
                   isFlipped = false;
               }
           }
       })
    }
}

console.log(cards)