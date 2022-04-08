const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

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

function removeBorder(){
    tabItems.forEach(item =>{item.classList.remove('tab-border')});
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

//Escucha cuando se hace click en una pesta;a
tabItems.forEach(item => item.addEventListener('click', selectItem));
//???? recorre el array tab items @adhiere el evento escuchador??, cuando se hace click en el item seleccionado??

/* tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
}); */