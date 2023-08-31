//DOM MANIPULATION

//Event Propagation

window.addEventListener('click', function(){
    console.log('window');
}, true);

document.addEventListener('click', function(){
    console.log('document');
}, true);

document.querySelector('.div2').addEventListener('click', function(){
    console.log('DIV 2');
}, true);

document.querySelector('.div1').addEventListener('click', function(){
    console.log('DIV 1');
}, true);

document.querySelector('button').addEventListener('click', function(e){
    console.log(e);
}, true);