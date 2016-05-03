/*

If you're reading this, you've gone too far. Turn around.

Don't look out the window, for my snipers have already found you.


*/


Meteor.startup( function() {


  process.env.MAIL_URL = "smtp://postmaster%40sandboxfb3d66b5c7764dc9889573755876171f.mailgun.org:7c07e3eb9ec6c2b69fb6de109d28712d@smtp.mailgun.org:587";

  // smtp = {
  //   username: Meteor.settings.private.mailgun.username,
  //   password: Meteor.settings.private.mailgun.password,
  //   server: Meteor.settings.private.mailgun.host,
  //   port: Meteor.settings.private.mailhun.port
  // }
  //
  // process.env.MAIL_URL = process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;

});

Meteor.publish( "shirts", function () {
  return Shirts.find({});
});

Meteor.publish( "carts", function() {
  return Carts.find({});
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
