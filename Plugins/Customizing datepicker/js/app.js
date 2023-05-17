$(document).ready(function(){
    $('[data-toggle="datepicker"]').datepicker({
        format: 'dd-mm-yyyy',
        endDate:new Date(),
    });
});