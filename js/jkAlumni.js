$(".button-collapse").sideNav();
$(document).ready(function(){
      $('.slider').slider({full_width: true});
    });

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 40 // Creates a dropdown of 15 years to control year
  });
 $(document).ready(function() {
    $('select').material_select();
  });

$('#married').click(function() {
    $('#anniversary').attr('disabled',! this.checked)
});
$('#keep').click(function() {
    $('#native-address').attr('disabled', this.checked)
});