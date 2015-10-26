
Router.configure({
  layoutTemplate: 'mainLayout'
});

Router.route('/', function() {
  this.render('homePage');
  this.layout('mainLayout');
});

Router.route('/shirts', function() {
  this.render('shirtsPage');
  this.layout('mainLayout');
});

Router.route('/calendar', function() {
  this.render('calendarPage');
  this.layout('mainLayout');
});

Router.route('/contact', function() {
  this.render('contactPage');
});
