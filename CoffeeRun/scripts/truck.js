// /provide all of the functionality for managing the food truck
(function (window) {
  'use strict';
  var App = window.App || {};

  function Truck(truckId, db) {
    this.truckId = truckId;
    this.db = db; //makes it db equal to the db that was inputed
    //will reference the database of datastore.js'
    //this is for every instance will be = to trickid thats passed in
  }

  ////When this method is called, the Truck instance will 
  //interact with its db property through the DataStore methods you declared earlier.
  Truck.prototype.createOrder = function (order) {
    console.log('Adding order for ' + order.emailAddress);
    this.db.add(order.emailAddress, order);
  };//myTruck.createOrder({ emailAddress: 'dr@no.com', coffee: 'decaf'});
  //using datastore for this part 

//we put this in console and access app.datastore()
//var myTruck = new App.Truck('007', new App.DataStore());

Truck.prototype.deliverOrder = function (customerId) {
  console.log('Delivering order for ' + customerId);
  this.db.remove(customerId);
  //deletes whatever is inputted that is also in db
};//removing orders

Truck.prototype.printOrders = function () {
  var customerIdArray = Object.keys(this.db.getAll());
  //get all orders from the db object
  //use object.keys to get a n array containing the email addresses for the orders
  console.log('Truck #' + this.truckId + ' has pending orders:');
  customerIdArray.forEach(function (id) {
    console.log(this.db.get(id));
  }, this);//this is undefined in the foreach so we need to define it
};


  App.Truck = Truck;
  window.App = App;

})(window);