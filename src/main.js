//BUSINESS LOGIC

//UI LOGIC
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './styles.css';
var DateCalculator = require('./DateCalculator.js').dateCalculatorModule;

$(document).ready(function() {
  $("#button").click(function(event) {
    let date = $('#input').val();

    let newDate = new DateCalculator(date);
    $('#result').text(newDate.checkDate());

    event.preventDefault()

  });
});
