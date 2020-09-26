(function (window) {
  'use strict';
  // Code will go here
  var App = window.App || {};
//If there is already an App property of the window, you assign the local App to it. 
//If not, the label App will refer to a new, empty object, represented by {}
  function DataStore() {
    //the job of the constructor is to creat and customize a new object
    console.log('running the DataStore function');
    this.data = {};
    //The job of a constructor is to create and customize a new object. 
    //Inside the body of the constructor, you can refer to that new object with 
    //the keyword this. You used the dot operator to create a property named data
    // on your new object and assigned an empty object to data.
  }


    DataStore.prototype.add = function (key, val) {
      //You gave DataStore.prototype the property add and you assigned a function to it
      this.data[key] = val;
      // Inside the function body, 
      // you used those arguments to make changes to the instance’s data property
      //In terms of how DataStore works with coffee orders, 
      //it will store the order information (the val), 
      //using the customer’s email address (the key).
    };
  
  //  add a method to look up a value based on a given key 
  //  and one to look up all keys and values
  DataStore.prototype.get = function (key) {
    return this.data[key];
//get method that accepts a key, 
//looks up the value for it in the instance’s data property, and returns it
  };

  DataStore.prototype.getAll = function () {
    return this.data;
  };

  DataStore.prototype.remove = function (key) {
    delete this.data[key];
  };

  App.DataStore = DataStore; //app.datastore prints out that console.log above
  window.App = App;
})(window);


  //To differentiate a constructor from a regular function, 
  //you use the keyword new when you call it. 
 // This tells JavaScript to create a new object, set up the reference from this to 
  //that new object, and to implicitly return that object