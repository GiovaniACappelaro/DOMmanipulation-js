//DOM manipulation

/*
//1.STYLING ELEMENTS

//inline syling with JS
const title = document.querySelector('#main-heading');

title.style.color = 'red';


//styling multiple elements
const listItems = document.querySelectorAll('.list-items');

for(i=0; i < listItems.length; i++){
    listItems[i].style.fontSize = '3rem';
}
*/

//2.CREATING ELEMENTS

const ul = document.querySelector('ul');

const li = document.createElement('li');

//adding elements

ul.append(li); 

//modifying the text

const firstListItem = document.querySelector('.list-items');

console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);