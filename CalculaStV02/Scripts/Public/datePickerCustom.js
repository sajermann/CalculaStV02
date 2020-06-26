$(document).ready(function () {
    var date_input = $('input[name="date"]'); //our date input has the name "date"
    var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
    date_input.datepicker({
        format: "dd/mm/yyyy",
        todayBtn: "linked",
        clearBtn: true,
        language: "pt-BR",
        forceParse: false,
        daysOfWeekDisabled: "0,6",
        autoclose: true,
        todayHighlight: true,
        datesDisabled: ['07/12/2018', '04/12/2018']
    });
});