//DOM MANIPULATION

//Event Listeners

//element.addEventListenner('tpe of event', function, <booleano>);

const buttonTwo = document.querySelector('.btn-2');

function alertBtn(){
    alert('I also love Javascript');
};


buttonTwo.addEventListener("click", alertBtn);

