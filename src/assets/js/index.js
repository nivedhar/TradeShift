$(document).ready(function(){
  $('#side1').focus();

  $('#submitBtn').on('click', function(e){
    var side1 = parseInt($('#side1').val());
    var side2 = parseInt($('#side2').val());
    var side3 = parseInt($('#side3').val());

    var tri = new Triangle(side1, side2, side3);
    var res = tri.GetTriangleType();

    if(res['status'])
      $('#result').text(res['msg']).css('color', 'green');
    else {
      $('#result').text(res['msg']).css('color', 'red');
    }

    $('.side').val(' ');
    $('#side1').focus();
  });
})
