function calculate() {
  var amount = $('#amount').val();
  var percentage = $('#percentage').val();
  var tip = amount * (percentage / 100);
  var total = Number(amount) + tip;

  $('#tip').val(tip.toFixed(2));
    $('#total').val(total.toFixed(2));
    // to fixed ensures that there are only two digits after the decimal

    return false;
    // prevents submission | any line of code after this won't be executed
}

$('#calculator').submit(calculate);
