var DateCalculator = require('./../src/DateCalculator.js').dateCalculatorModule;
describe('DateCalculator', function() {
  var reusableDateCalculator;

  beforeEach(function(){
    reusableDateCalculator = new DateCalculator (01, 01, 2000);
  });


  it('should test if the input is in a correct format', function() {
    var input = new DateCalculator(03, 04, 2005);
    console.log("hello");
    expect(input.date).toEqual(03, 04, 2005);
  });

});
