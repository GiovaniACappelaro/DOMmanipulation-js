//DOM MANIPULATION

//TRAVERSE THE DOM

//PARENT NODE TRAVERSAL
let ul = document.querySelector('ul');

/*console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement);
navega do ul "pra cima" - vai até os pais dos pais... 


const html = document.documentElement; //elemento raiz do doc (tag html)

console.log(html.parentNode);
console.log(html.parentElement);

*/

//CHILD NODE TRAVERSAL

/*console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[1].style.backgroundColor = "blue"; */

//Pegar apenas elementos filhos (editáveis)

/*console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild); */


//SIBLING NODE TRAVERSAL
const div = document.querySelector('div');

/*console.log(div.childNodes);

console.log(ul.previousSibling);
console.log(ul.nextSibling); */

//anotação: node considera 'tudo', element considera os elementos em si (sem text por ex)

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);