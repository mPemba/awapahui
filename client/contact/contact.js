


Template.contactPage.events({

  "submit .contactForm": function(event) {

    var userName = event.target.name.value;
    var userEmail = event.target.email.value;
    var userMessage = event.target.textarea.value;

    Meteor.call('sendEmail',
                'to.michael.j.say@gmail.com',
                'from.'+userEmail,
                'Hello from ' + userName,
                'message from user'
              );
    }

});
