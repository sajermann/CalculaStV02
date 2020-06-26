
$(document).ready(function () {
    theme();

    function theme() {
        if (Cookies.get('theme') == 'darkcyan') {
            themeColors(Cookies.get('theme'), 'white', 'green', 'darkturquoise');
        }
       else if (Cookies.get('theme') == 'darkgoldenrod') {
            themeColors(Cookies.get('theme'), 'white', 'green', 'darkturquoise');
        }
        else if (Cookies.get('theme') == 'darkturquoise') {
            themeColors(Cookies.get('theme'), 'white', 'green')
        }

        else if (Cookies.get('theme') == 'deepskyblue') {
            themeColors(Cookies.get('theme'), 'white', 'green')
        }

        else if (Cookies.get('theme') == 'dodgerblue') {
            themeColors(Cookies.get('theme'), 'white', 'green')
        }

        else if (Cookies.get('theme') == 'forestgreen') {
            themeColors(Cookies.get('theme'), 'white', 'green')
        }

        else if (Cookies.get('theme') == 'hotpink') {
            themeColors(Cookies.get('theme'), 'white', 'green')
        }

        else if (Cookies.get('theme') == 'lightcoral') {
            themeColors(Cookies.get('theme'), 'white', 'green')
        }

        else if (Cookies.get('theme') == 'lightgreen') {
            themeColors(Cookies.get('theme'), 'white', 'green', 'green');
        }

        else if (Cookies.get('theme') == 'steelblue') {
            themeColors(Cookies.get('theme'), 'white', 'green')
        }


    }
   
    $('.DropDownListThema').change(function () {

	if( $('.DropDownListThema').val() == 'darkcyan'){
themeColors( $('.DropDownListThema').val(), 'white', 'green')
}

else if( $('.DropDownListThema').val() == 'darkgoldenrod'){
themeColors( $('.DropDownListThema').val(), 'white', 'green')
}

else if( $('.DropDownListThema').val() == 'darkturquoise'){
themeColors( $('.DropDownListThema').val(), 'white', 'green')
}

else if( $('.DropDownListThema').val() == 'deepskyblue'){
themeColors( $('.DropDownListThema').val(), 'white', 'green')
}

else if( $('.DropDownListThema').val() == 'dodgerblue'){
themeColors( $('.DropDownListThema').val(), 'white', 'green')
}

else if( $('.DropDownListThema').val() == 'forestgreen'){
themeColors( $('.DropDownListThema').val(), 'white', 'green')
}

else if( $('.DropDownListThema').val() == 'hotpink'){
themeColors( $('.DropDownListThema').val(), 'white', 'green')
}

else if( $('.DropDownListThema').val() == 'lightcoral'){
themeColors( $('.DropDownListThema').val(), 'white', 'green')
}

else if( $('.DropDownListThema').val() == 'lightgreen'){
themeColors( $('.DropDownListThema').val(), 'white', 'green')
}

else if( $('.DropDownListThema').val() == 'steelblue'){
themeColors( $('.DropDownListThema').val(), 'white', 'green')
}


})

 function themeColors(primary, secondary, hover, tertiary) {
	
$('body').css('background-color', secondary);
$('header').css('background-color', primary).css('color', secondary);
$('.cartaoUsuario').css('background-color', primary).css('color', secondary);
$('footer').css('background-color', primary).css('color', secondary);
$('.tema').css('background-color', primary).css('color', secondary);
$('.letraD').css('color', primary);
$('.letraF').css('color', primary);
$('.titulo').css('color', primary);
     //$('.iconeGlobeGGA').css('color', primary);
     //$('.iconeListGGA').css('color', primary);
     //$('.iconeCalendarGGA').css('color', primary);
     //$('.iconeDollarGGA').css('color', primary);
     //$('.iconeIndustryGGA').css('color', primary);
     //$('.iconeCodeGGA').css('color', primary);
     //$('.iconeStreetViewGGA').css('color', primary);
     //$('#travaVencimentoIcone').css('color', primary);
     $('.iconeTruckAsn').css('color', primary);
     $('.iconeListAsn').css('color', primary);
     $('.iconeCalendarAsn').css('color', primary);
     $('.iconeTruckPlaca').css('color', primary);
     $('.card').css('border-color', secondary);
     $('.card-header').css('background-color', tertiary);
     $('.card-body').css('background-color', tertiary);
     $('.usuarioSobre').css('color', primary);
     $('.telefoneSobre').css('color', primary);
     $('.emailSobre').css('color', primary);
     $('.githubSobre').css('color', primary);
     $('.iconeCalendarCalculaData').css('color', primary);
     $('.processingLogin').css('color', primary);
     $('.fa-cog-processing').css('color', primary);
     $('.divProcessing').css('background-color', primary);

var corOriginal = $('.header').css('background-color');
$(".opcaoUm").hover(
function() {
$(this).stop().animate({"backgroundColor": hover}, 0);
},
function() {
$(this).stop().animate({"backgroundColor": corOriginal}, 1000);
    });

     $(".cartaoUsuario").hover(
       function () {
           
            $(this).stop().animate({ "backgroundColor": hover }, 0);
        },
        function () {
            $(this).stop().animate({ "backgroundColor": corOriginal }, 1000);
        });

}
	
	
});