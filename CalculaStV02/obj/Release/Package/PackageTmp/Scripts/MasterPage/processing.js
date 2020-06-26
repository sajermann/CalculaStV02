$('body').before('<div class="processing" style="pointer-events: none;position:absolute;display: flex;flex-direction:column;justify-content: center;align-items: center;height:100%; width:100%;"><i class="fas fa-cog fa-spin fa-cog-processing" style="font-size: 15em;color:blue"></i><div class="divProcessing" style="background: blue;color: white;padding: 5px;"><span>Processando...</span></div></div>');
$('.processing').hide();
function processingOpen() {
    $('body').fadeOut(500); $('.processing').fadeIn(1000);
}
function processingClose() {
    $('.processing').fadeOut(500); $('body').fadeIn(1000);
}