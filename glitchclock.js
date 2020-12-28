jQuery_2_1_3(document).ready(function () {

  function second_passed() {
    jQuery_2_1_3('.clock').removeClass('is-off');
  }
  setTimeout(second_passed, 2000)


  var newDate = new Date();
  newDate.setDate(newDate.getDate());

  setInterval( function() {

    var hours    = new Date().getHours();
    var seconds  = new Date().getSeconds();
    var minutes  = new Date().getMinutes();

    var realTime = ( hours < 10 ? '0' : '' ) + hours + ' : ' + ( minutes < 10 ? '0' : '' ) + minutes + ' : ' + ( seconds < 10 ? '0' : '' ) + seconds

    jQuery_2_1_3('.time').html(realTime);
    jQuery_2_1_3('.time').attr('data-time', realTime);

  }, 1000);

});