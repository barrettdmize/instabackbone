// Item Model

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/instabackboneNew',
  idAttribute: '_id',
  defaults: {
    caption: "caption",
    isComplete: false
  },
  initialize: function () {

  }
});
