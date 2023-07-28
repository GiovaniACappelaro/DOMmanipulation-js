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

//3.ADDING ELEMENTS
ul.append(li); 

//4.MODIFYING ELEMENTS TEXT
li.innerText = 'X-men' ;

//5.MODIFYING ATRIBUTES & CLASSES
li.classList.add('list-items');

//REMOVE ELEMENTS
li.remove();
