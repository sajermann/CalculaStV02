/*var elem = document.getElementById('modalFixed');
var instance = M.Modal.init(elem, {
    dismissible: false,
    onOpenEnd: function () {
        //alert('abertto')
    }
});
instance.open();*/



function modalCreator(config) {
    document.querySelector('body').appendChild(document.createElement('div')).setAttribute('id', 'modalFixed');

    document.querySelector('#modalFixed').setAttribute('class', 'modal');
    document.querySelector('#modalFixed').classList.add('modal-fixed-footer');


    document.querySelector('#modalFixed').appendChild(document.createElement('div')).setAttribute('id', 'modal-content');
    document.querySelector('#modal-content').setAttribute('class', 'modal-content');

    document.querySelector('#modal-content').appendChild(document.createElement('h4')).setAttribute('id', 'tituloModalFixed');

    document.querySelector('#modal-content').appendChild(document.createElement('div')).setAttribute('id', 'conteudoModalFixed');

    document.querySelector('#modalFixed').appendChild(document.createElement('div')).setAttribute('id', 'modal-footer');
    document.querySelector('#modal-footer').setAttribute('class', 'modal-footer');

    document.querySelector('#modal-footer').appendChild(document.createElement('a')).setAttribute('id', 'buttonOk');
    document.querySelector('#buttonOk').setAttribute('href', '#!');
    document.querySelector('#buttonOk').setAttribute('class', 'modal-close');
    document.querySelector('#buttonOk').classList.add('waves-effect');
    document.querySelector('#buttonOk').classList.add('waves-green');
    document.querySelector('#buttonOk').classList.add('btn-flat');
    document.querySelector('#buttonOk').innerText = 'Ok'


}