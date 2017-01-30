(function($, _, Backbone, Drupal) {
    Drupal.todoCollection = Backbone.Collection.extend({
        model:  Drupal.todoModel,
        localStorage: new Backbone.LocalStorage('test-backbone'),
        todo_completed: function () {

            // where is underscore method
            // Return an array of all the models in a collection
            // that match the passed attributes.
            return this.where({completed: true});
        },
        todo_remaining: function () {
            return this.where({completed: false});
        }
    });

})(jQuery, _, Backbone, Drupal);