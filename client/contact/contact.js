


Template.contactPage.events({

  "submit .contactForm": function(event) {

    var userName = event.target.name.value;
    var userEmail = event.target.email.value;

    Meteor.call('sendEmail',
                'michael.j.say@gmail.com',
                userEmail,
                'Hello from ' + userName,
                'This is a test of Email.send.');
    }

});
