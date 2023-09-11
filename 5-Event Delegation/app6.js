//DOM Manipulation

//Event Delegation

/*Allows user to append a SINGLE event listener
to a parent element that adds it to all of its present
AND future descendants that match a selector
*/

document.querySelector("#sports").addEventListener('click', function(e){
    console.log(e.target.getAttribute('id') + ' is clicked');

    const target = e.target;

    if(target.matches('li')){
        target.style.backgroundColor = '#D3D3D3';
    }

})


/*Com delegation, podemos atribuir o listener ao elemento pai (UL) e
espalhar para os filhos (LI) a partir do bubbling */

