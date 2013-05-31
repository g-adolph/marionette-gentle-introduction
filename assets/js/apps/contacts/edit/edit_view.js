ContactManager.module('ContactsApp.Edit', function(Edit, ContactManager, Backbone, Marionette, $, _){
  Edit.Contact = Marionette.ItemView.extend({
    template: "#contact_form",
    
    initialize: function(){
      this.title = "Edit " + this.model.get('first_name') + " " + this.model.get('last_name');
    },
    
    events: {
      'click button.js-submit': 'updateContact'
    },
    
    updateContact: function(e){
      e.preventDefault();
      var data = Backbone.Syphon.serialize(this);
      this.trigger("form:submit", data);
    },
    
    onRender: function(){
      if( ! this.options.asModal){
        var $title = $('<h1>', { text: this.title });
        this.$el.prepend($title);
      }
    },
    
    onShow: function(){
      if(this.options.asModal){
        this.$el.dialog({
          modal: true,
          title: this.title,
          minWidth: 500
        });
      }
    },

    onFormDataInvalid: function(errors){
      var $view = this.$el;

      var clearFormErrors = function(){
        var $form = $view.find("form");
        $form.find(".help-inline.error").each(function(){
          $(this).remove();
        });
        $form.find(".control-group.error").each(function(){
          $(this).removeClass("error");
        });
      }

      var markErrors = function(value, key){
        var $control_group = $view.find("#contact_" + key).parent();
        var $error_el = $('<span>', { class: "help-inline error", text: value });
        $control_group.append($error_el).addClass("error");
      }

      clearFormErrors();
      _.each(errors, markErrors);
    }
  });
});