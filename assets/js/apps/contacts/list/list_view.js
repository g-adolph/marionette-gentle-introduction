ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _){
  List.Contact = Backbone.Marionette.ItemView.extend({
    tagName: "tr",
    template: "#contact-list-item"
  });

  List.Contacts = Backbone.Marionette.CompositeView.extend({
    tagName: "table",
    className: "table table-hover",
    template: "#contact-list",
    itemView: List.Contact,
    itemViewContainer: "tbody"
  });
});