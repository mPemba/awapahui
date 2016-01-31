Meteor.publish( "shirts", function () {
  return Shirts.find({});
});

Meteor.publish( "carts", function() {
  return Carts.find({});
});

// Meteor.startup( function() {
//   process.env.MAIL_URL = "sandboxfb3d66b5c7764dc9889573755876171f.mailgun.org";
// });

Meteor.startup( function() {
  process.env.MAIL_URL = "smtp://postmaster@sandboxfb3d66b5c7764dc9889573755876171f.mailgun.org:7c07e3eb9ec6c2b69fb6de109d28712d@smtp.mailgun.org:587";
});

Meteor.methods({
  addToCarts: function(shirt) {
    currentCart = Carts.find({});

    currentCart.items.push(shirt);

  },
  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  }
});
