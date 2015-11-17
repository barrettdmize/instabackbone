var $ = require('jquery');
var _ = require('underscore');
 var ItemModel = require('./itemModel');
 var ItemCollection = require('./itemCollection');


$('.submitbtn').on('click', function(event){
  event.preventDefault();
  window.itemCollection = new ItemCollection();
  console.log("before fetch: ", itemCollection);
  var myModel = new ItemModel({caption: $("#caption").val()});
  myModel.save();
  itemCollection.fetch().then(function (collectionData) {
    _.each(itemCollection.models, function(el){
        $('.textarea').prependel.get('caption');

});
});
