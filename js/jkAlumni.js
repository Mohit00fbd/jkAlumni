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

$('#married').change(function(){ 
    $('#anniversary').parent().css( 'visibility', this.checked ? 'visible' : 'hidden' );
});