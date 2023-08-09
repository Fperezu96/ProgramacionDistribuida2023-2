$(document).ready(function () {
    //Registrar los botones para responder al evento click
    $("#dvMenu").load("../Paginas/Menu.html");

    $('#txtFechaNacimiento').datetimepicker({
        format: 'L'
    });

});

