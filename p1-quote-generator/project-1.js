//Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [{
    quote: "To live is the rarest thing in the world. Most people exist, that is all." ,
    person: "Oscar Wilde"
},{
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    person: "Steve Jobs"
},{
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
    person: "James Cameron"
},{
    quote: "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
    person: "John Lennon"
},{
    quote: "The only thing we have to fear is fear itself.",
    person: "Franklin D. Roosevelt"
},{
    quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. ",
    person: "Helen Keller"
},{
    quote: "You must be the change you wish to see in the world.",
    person: "Mahatma Gandhi"
},{
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    person: "Mother Teresa"
},{
    quote: "Well done is better than well said.",
    person: "Benjamin Franklin"
},{
    quote: "In the end, it's not the years in your life that count. It's the life in your years." ,
    person: "Abraham Lincoln"
}]

//Listeners

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length); //random array position 

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;


})

/*OBS: Math.random() returns allways between 0 an 1, 
so we mutiply by the array length and use floor to make it an integer*/