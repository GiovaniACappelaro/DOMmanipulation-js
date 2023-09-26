// Variables

let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

//Event listeners

openBtn.addEventListener('click', function(){

    modalContainer.style.display = 'block';

}) //show modal

closeBtn.addEventListener('click', function(){

    modalContainer.style.display = 'none';

})//hide modal on X

window.addEventListener('click', function(e){
    if(e.target == modalContainer){
        modalContainer.style.display = 'none';
    }
})//hide on clicks outside the modal

