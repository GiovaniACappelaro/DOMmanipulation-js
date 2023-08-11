//DOM MANIPULATION

//Event Listeners

//element.addEventListenner('tpe of event', function, <booleano>);


//Click
const buttonTwo = document.querySelector('.btn-2');

function alertBtn(){
    alert('I also love Javascript');
};


buttonTwo.addEventListener("click", alertBtn);


//Mouse over
const newBackgroundColor = document.querySelector('.box-3');

function changeBGColorOver(){
    newBackgroundColor.style.background = 'blue';
}

function changeBGColorOut(){
    newBackgroundColor.style.background = '#1c1c5f';
}

newBackgroundColor.addEventListener('mouseover', changeBGColorOver);

newBackgroundColor.addEventListener('mouseout', changeBGColorOut);

//pra esse caso, é muito melhor usar um :hover direto no CSS 