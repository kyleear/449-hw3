(function(window) {
    'use strict';
    var $ = window.jQuery;
    var PAYMENT_SELECTOR = '[data-payment="form"]'; //grabbing form so we can change it
    var App = window.App;
    var FormHandler = App.FormHandler;//adding form handler so we can get what is inputted
    var formHandler = new FormHandler(PAYMENT_SELECTOR);
  
    formHandler.addSubmitHandler(function() {
      var $name = $('input[name=username]').val();//grabbing name=username in html grabbing what is inputted
      //grabbing thankyousg class and adding variable name to it
      document.getElementById('thankyoumsg').innerHTML = 'Thank you for your payment, ' + $name + '.';
      $('#thankyou').modal();//making the thankyou a modal
    });
  })(window);