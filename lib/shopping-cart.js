if(Meteor.isClient){

  userKey = localStorage.getItem("user_key");
  if(!userKey){
    userKey = Meteor.userId();
    localStorage.setItem("user_key", userKey);
  }

  getCart = function(next){
    Meteor.call("getCart", next);
  };

  addToCart = function (shirt) {
    Meteor.call('addToCarts', shirt);
  };
  removeFromCart = function (sku, callback) {
    Meteor.call('removeFromCart',userKey, sku, callback);
  };
  updateCart = function (sku, quantity, callback) {
    Meteor.call('updateCart', userKey, sku, quantity, callback);
  };
}

// if(Meteor.isServer){
//   Meteor.methods({
//
//     getCart : function(userKey){
//       check(userKey, String);
//       return Carts.getCart(userKey);
//     },
//
//     updateCart : function(userKey){
//       check(userKey, String);
//
//       var cart = Meteor.call("getCart", userKey);
//     },
//
//     addToCarts : function(shirt){
//
//       check(shirt, Object);
//       var cart = Meteor.call("getCart");
//
//       cart.items.push(shirt);
//       //get the item in the cart
//       // var found = _.find(cart.items, function(item){
//       //
//       //   console.log('it made it this far: shopping-cart.js line 45')
//       //
//       //
//       //
//       //   return item.shirt === shirt;
//       // });
//
//         cart.items.push(item);
//
//       // cart.notes.push({
//       //   note : sku + " added to cart",
//       //   created_at : new Date()
//       // });
//       //save it
//       Meteor.call("saveCart", cart);
//       return cart;
//     },
//     //removeFromCart
//     removeFromCart : function(userKey, sku){
//       check(userKey, String);
//       check(sku, String);
//       var cart = Meteor.call("getCart", userKey);
//       //get the item in the cart
//
//       var found = _.find(cart.items, function(item){
//         return item.sku === sku;
//       });
//
//       if(found){
//         var foundIndex = cart.items.indexOf(found);
//         cart.items.splice(foundIndex,1);
//         cart.notes.push({
//           note : sku + " removed from cart",
//           created_at : new Date()
//         });
//         Meteor.call("saveCart", cart);
//       }
//
//       return cart;
//     },
//
//     saveCart : function(cart){
//       check(cart, Match.ObjectIncluding({
//         userKey: String,
//         items: [Match.ObjectIncluding({
//           sku: String
//         })]
//       }));
//
//       var products = Products.find({
//         sku: {$in: _.pluck(cart.items, 'sku')}
//       }).fetch();
//
//       cart.updated_at = new Date();
//       cart.total = 0;
//       var counter = 0;
//       _.each(cart.items, function(item){
//         item.price = skuMap[item.sku].price;
//         item.quantity = Math.max(0, item.quantity);
//         // TODO: Don't trust discount from client
//         item.lineTotal = (item.price - item.discount) * item.quantity;
//         cart.total+=item.lineTotal;
//         counter++;
//       });
//       cart.itemCount = counter;
//       Carts.update({userKey : cart.userKey}, cart, {upsert : true});
//       return cart;
//     },
//
//     emptyCart : function(userKey){
//       check(userKey, String);
//       Carts.remove({userKey : userKey});
//     }
//   });
// }
