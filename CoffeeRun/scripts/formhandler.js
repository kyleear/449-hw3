(function (window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var App = window.App || {};
  var $ = window.jQuery;

  class FormHandler {
      constructor(selector) {
          // code will go here
          console.log('Inside FormHandler');
          if (!selector) { throw new Error('No selector provided'); }

          this.$formElement = $(selector);
          if (this.$formElement.length === 0) {
              throw new Error('Could not find element with selector: ' + selector);
          }
      }
//Prefixing a variable with $ is a sign 
//that the variable refers to elements selected using jQuery.
        addSubmitHandler(fn) {
          console.log('Setting submit handler for form');
        
          this.$formElement.on('submit', function (event) {
              event.preventDefault(); 
              var data = {};
              $(this).serializeArray().forEach(function (item) {
                  data[item.name] = item.value;
                  console.log(item.name + ' is ' + item.value);
              });
              console.log(data);
              fn(data);
          });
        }
        }


        //when te form is submitted your code should do  something with the data
//serializeArray() gets the values from the form
//need to wrap the object by doing $(this) to use seralizearray
  
    App.FormHandler = FormHandler;
    window.App = App;

  })(window);