Meteor.publish( "shirts", function () {
  return Shirts.find({});
});

Meteor.publish( "carts", function() {
  return Carts.find({});
});

Meteor.startup( function() {
  process.env.MAIL_URL = "sandboxfb3d66b5c7764dc9889573755876171f.mailgun.org";
});

Meteor.startup( function() {
  process.env.MAIL_URL = "smtp://postmaster%40104.130.122.3.mailgun.org:password@smtp.mailgun.org:587";
});

Meteor.methods({
  addToCarts: function(shirt) {
    currentCart = Carts.find({});

    currentCart.items.push(shirt);

  }
});
