//DOM Manipulation

//Reveal event

const revealBtn = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden-content');

function revealContent(){
    if( hiddenContent.classList.contains('revealBtn') ){
        hiddenContent.classList.remove('reveal-btn');
    } else{
        hiddenContent.classList.add('reveal-btn');
    }
}

revealBtn.addEventListener('click', revealContent);

