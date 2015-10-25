
Meteor.subscribe('shirts', function() {
  var shizzles = Shirts.find();
  console.log(shizzles);
})

Template.shirtsPage.helpers({
  shirts: function() {
    return Shirts.find({});
  },
  cart: function() {
    currentCart = Carts.getCart(userKey);
    return currentCart;
  }
});

Template.shirtsPage.events({
  'submit .newShirt': function(event) {
    event.preventDefault();

    var newShirt = {}

    newShirt.age = event.target.age.value;
    newShirt.name = event.target.name.value;
    newShirt.gender = event.target.gender.value;
    newShirt.size = event.target.size.value;

    addToCart(newShirt);

    // addToCart(newShirt, function(err, res) {
    //   if (err) {
    //     console.log('error shirts.js line 30');
    //   } else {
    //     console.log('is it working? shirts.js line 32');
    //   }
    // });

    // Carts.insert(newShirt);

    Shirts.insert(newShirt);

    // var age = event.target.age.value;
    // var name = event.target.name.value;
    // var gender = event.target.gender.value;
    // var size = event.target.size.value;

    // Shirts.insert({
    //   age: age,
    //   name: name,
    //   gender: gender,
    //   size: size,
    //   createdAt: new Date()
    // });



    $('.newShirt')[0].reset();
  },
  'click .delete': function() {
    Shirts.remove(this._id);
  }
});
