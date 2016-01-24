Carts = new Mongo.Collection("carts");

Carts.getCart = function() {
  var cart = Carts.find({});

  if (!cart) {
    cart = {

      email: null,
      name: null,
      createdAt: new Date(),
      items: [],
      notes: [{
        note: 'Cart Created',
        createdAt: new Date()
      }],
      status: 'open',
      itemCount: 0,
      total: 0
    };
  }
  return cart;
};


// db.carts.insert({email: 'michael.j.say@gmail.com',name: 'mike',createdAt: new Date(),items: [],notes: [{note: 'cart created',createdAt: new Date()}],status: 'open',itemCount: 0,total: 0
// });
