Meteor.publish("shirts", function () {
  return Shirts.find({});
});

Meteor.publish("carts", function() {
  return Carts.find({});
})

Meteor.methods({
  addToCarts: function(shirt) {
    currentCart = Carts.find({});

    currentCart.items.push(shirt);

  }
})
