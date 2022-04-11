const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
/* const container=document.getElementById('accordion-menu'); */
/* const container = document.getElementById('containertr'); */

//selecciona cuando se 
function selectItem(e) {
    removeBorder();
    removeShow();
    //agregar borde a la pesta;a actual
    this.classList.add('tab-border');

    //capturar contenido del dom
    const tabContentItem = document.querySelector(`#${this.id}-content`);

    //muestra la clase capturada
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => { item.classList.remove('tab-border') });
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

//Escucha cuando se hace click en una pesta;a
tabItems.forEach(item => item.addEventListener('click', selectItem));
//???? recorre el array tab items @adhiere el evento escuchador??, cuando se hace click en el item seleccionado??

/* tabItems.forEach(item => {
    item.addEventListener('click', selectItem);
}); */


/* container.addEventListener('click',(e)=>{
     e.preventDefault();
     console.log(e.target.classList.contains('item'));
    if (e.target.classList.contains('item')) {
        console.log(e.target.parentElement);
        e.target.parentElement.classList.toggle('scale');
    }
}) */


/* container.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.classList.contains('link'));
    if (e.target.classList.contains('link')) {
        e.target.children[1].classList.toggle('rotate')
        let value = e.target.parentElement
        value.classList.toggle('scale')
    }
    e.stopPropagation()
}) */