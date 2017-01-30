/**
 * Created by brumeregan on 11/1/16.
 */

(function($, _, Backbone, Drupal) {
    Drupal.todoModel = Backbone.Model.extend({
        defaults: function () {
            return {
                title: 'test title',
                completed: false
            };
        },

        // Toggle completed state of ited
        toggle: function () {
            this.save({
                completed: !this.get('completed')
            });
        }
    });
    
})(jQuery, _, Backbone, Drupal);