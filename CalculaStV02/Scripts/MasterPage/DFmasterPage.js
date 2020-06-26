var infosUserJson = [];
document.addEventListener('DOMContentLoaded', function () {
    //Menu Lateral Mobile
    var elems = document.querySelector('.sideMenu');
    var instances = M.Sidenav.init(elems);

    //Menu Lateral Perfil
    var elems = document.querySelector('.sidePerfil');
    var instances = M.Sidenav.init(elems, { 'edge': 'right' });
    var instancePerfil = M.Sidenav.getInstance(elems);
    document.querySelector('.botao').addEventListener('click', function () {
        instancePerfil.open();
    });

    //Menu Dropdown
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, { 'closeOnClick': false });

    //Tooltips
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);

    //Contador Caracteres
    var elems = document.querySelector('input#input_text');
    M.CharacterCounter.init(elems);
    var elems = document.querySelector('#textarea1');
    M.CharacterCounter.init(elems);
    var elems = document.querySelector('.editNameUser');
    M.CharacterCounter.init(elems);
    var elems = document.querySelector('.editSobreNameUser');
    M.CharacterCounter.init(elems);
    var elems = document.querySelector('.editLastNameUser');
    M.CharacterCounter.init(elems);

    //Atualizando Labels
    M.updateTextFields();

    //Tabs
    var el  = document.querySelector('.tabs');
    var instanceTabs = M.Tabs.init(el);

    //Título da Página no Header
    document.querySelector('.LabelTituloHeader').textContent = `${document.title}`

    //Select Perfil Temas
    var elems = document.querySelectorAll('select');
    var instancesSelect = M.FormSelect.init(elems);

    //Preenchendo Perfil
    //conexaoPreencherPerfil();

    VMasker(document.querySelector(".editTelUser")).maskPattern("(999) 99999-9999");
    fadeIn(document.querySelector('body'), 'flex');
   
});

function preencherPerfil(infos) {
    //console.log(infos.Nome)
    document.querySelector('.avatarUser').setAttribute('src', infos.Imagem);
    document.querySelector('.editAvatarUser').value = `${infos.Imagem}`;
    document.querySelector('.backgroundUser').setAttribute('src', infos.ImagemBackground);
    document.querySelector('.editBackgroundUser').value = `${infos.ImagemBackground}`;
    document.querySelector('.nameUser').textContent = `${infos.Nome} ${infos.Sobrenome}`;
    document.querySelector('.editNameUser').value = `${infos.Nome}`;
    document.querySelector('.editLastNameUser').value = `${infos.Sobrenome}`;
    document.querySelector('.idUser').innerText = `${infos.IdUsuario}`;
    document.querySelector('.tipoUser').innerText = `${infos.Tipo}`;
    document.querySelector('.telUser').innerText = `${infos.Celular}`;
    document.querySelector('.editTelUser').value = `${infos.Celular}`;
    document.querySelector('.emailUser').innerText = `${infos.Email}`;
    document.querySelector('.editEmailUser').value = `${infos.Email}`;
    document.querySelector('.validadeUser').innerText = `${infos.ValidadeLicenca}`;
    document.querySelector('.temaUser').innerText = `${infos.Theme}`;
    document.querySelector('.bioUser').innerText = `${infos.Bio}`;
    document.querySelector('.editBioUser').value = `${infos.Bio}`;
    atualizarEdicaoAvatar();
    atualizarEdicaoBackground();
}

function atualizarEdicaoAvatar() {
    document.querySelector('.editAvatarUserImage').setAttribute('src', document.querySelector('.editAvatarUser').value);
}

function atualizarEdicaoBackground() {
    document.querySelector('.editUserBackgroundImage').setAttribute('src', document.querySelector('.editBackgroundUser').value);
}

document.addEventListener('keyup', function (e) {

    if (e.target.classList.contains('editAvatarUser')) {
        atualizarEdicaoAvatar();
    }

    if (e.target.classList.contains('editBackgroundUser')) {
        atualizarEdicaoAvatar();
    }

});

document.addEventListener('click', function (e) {

    if (e.target.classList.contains('buttonSavePerfil')) {
        verificarParaSalvar();
    }

});

var avatarExistent = true;
document.querySelector('.editAvatarUserImage').onerror = function () {
    avatarExistent = false;
}

document.querySelector('.editAvatarUserImage').onload = function () {
    avatarExistent = true;
}

var backgroundExistent = true;
document.querySelector('.editUserBackgroundImage').onerror = function () {
    backgroundExistent = false;
}

document.querySelector('.editUserBackgroundImage').onload = function () {
    backgroundExistent = true;
}



function verificarParaSalvar() {
    if (document.querySelector('.editBioUser').value == "") { M.toast({ html: 'Biografia não pode ficar em branco!' }); document.querySelector('.editBioUser').focus(); }
    else if (document.querySelector('.editBioUser').value.length > 120) { M.toast({ html: 'Biografia acima do limite de caracteres!' }); document.querySelector('.editBioUser').focus(); }
    else if (document.querySelector('.editNameUser').value.length > 15) { M.toast({ html: 'Nome acima do limite de caracteres!' }); document.querySelector('.editNameUser').focus(); }
    else if (document.querySelector('.editLastNameUser').value.length > 20) { M.toast({ html: 'Sobrenome acima do limite de caracteres!' }); document.querySelector('.editLastNameUser').focus(); }
    else if (document.querySelector('.editTelUser').value.length > 21) { M.toast({ html: 'Celular acima do limite de caracteres!' }); document.querySelector('.editTelUser').focus(); }
    else if (document.querySelector('.editEmailUser').classList.contains('invalid')) { M.toast({ html: 'Email inválido' }); document.querySelector('.editEmailUser').focus(); }
    else if (document.querySelector('.editPassUser').value == "") { M.toast({ html: 'Senha não pode ficar em branco!' }); document.querySelector('.editPassUser').focus(); }
    else if (document.querySelector('.editPassUser').value.length > 10) { M.toast({ html: 'Senha acima do limite de 10 caracteres!' }); document.querySelector('.editPassUser').focus(); }
    else if (document.querySelector('.editNewPassUser').value != document.querySelector('.editRepeatNewPassUser').value) { M.toast({ html: 'Alteração de senhas não idênticas' }); document.querySelector('.editNewPassUser').focus(); }
    else if (document.querySelector('.editNewPassUser').value.length > 10 || document.querySelector('.editRepeatNewPassUser').value.length > 10) { M.toast({ html: 'Alteração de senhas acima do limite de 10 caracteres' }); document.querySelector('.editNewPassUser').focus(); }
    else if (!avatarExistent) { M.toast({ html: 'Avatar sem imagem!' }); document.querySelector('.editAvatarUser').focus(); }
    else if (!backgroundExistent) { M.toast({ html: 'Background sem imagem!' }); document.querySelector('.editBackgroundUser').focus(); }
    else {
      savePerfil();
    }
}


function savePerfil() {
    var nome = document.querySelector('.editNameUser').value;
    var sobrenome = document.querySelector('.editLastNameUser').value;
    var senha = document.querySelector('.editPassUser').value;
    var senhaAlterada = document.querySelector('.editRepeatNewPassUser').value;
    var celular = document.querySelector('.editTelUser').value;
    var email = document.querySelector('.editEmailUser').value;
    var image = document.querySelector('.editAvatarUser').value;
    var background = document.querySelector('.editBackgroundUser').value;
    var bio = document.querySelector('.editBioUser').value;
    var theme = document.querySelector('.editThemeUser').value;

    M.toast({ html: 'Perfil Atualizado com Sucesso!' });
    document.querySelector('.editPassUser').value = "";
    document.querySelector('.editNewPassUser').value = "";
    document.querySelector('.editRepeatNewPassUser').value = "";
}