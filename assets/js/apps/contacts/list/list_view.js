ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _){
  List.Contact = Backbone.Marionette.ItemView.extend({
    tagName: "li",
    template: "#contact-list-item"
  });

  List.Contacts = Backbone.Marionette.CollectionView.extend({
    tagName: "ul",
    itemView: List.Contact
  });
});