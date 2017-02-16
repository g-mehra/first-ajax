$(document).ready(function () {



  $('#button-1').on('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET'
    }).done(function (responseData){
      console.log(responseData);
    });
  });


  $('#button-2').on('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET'
    }).done(function (responseData){
      console.log(responseData)
      $("#step3456").append('<br><br>',responseData);
    }).fail(function(dataResponse){
      console.log(dataResponse.responseText);
      $("#step3456").append('<br><br>',dataResponse.responseText);
    }).always(function(){
      console.log("Request finished!");
    });
  });


  $('#button-3').on('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET'
    }).done(function (responseData){
      console.log(responseData)
      $("#step7").append('<br><br>',responseData);
    }).fail(function(){
      $("#step7").append('<br><br>','Response Failed');
    }).always(function(){
      console.log("Request finished!");
    });
  });

  $('#button-4').on('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: {timezone: 'Europe/Sofia'}
    }).done(function (responseData){
      console.log(responseData)
      $("#step8").append('<br><br>',responseData);
    }).fail(function(){
      $("#step8").append('<br><br>','Response Failed');
    }).always(function(){
      console.log("Request finished!");
    });
  });

  $('#button-5').on('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      dataType: 'html'

    }).done(function (responseData){
      console.log(responseData)
      $("#step9").append('<br><br>',responseData);
    }).fail(function(){
      $("#step9").append('<br><br>','Response Failed');
    }).always(function(){
      console.log("Request finished!");
    });
  });


});
