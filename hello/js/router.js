/**
 * Created by brumeregan on 11/27/16.
 */

(function($, _, Backbone, Drupal) {
    Drupal.todoRouter = Backbone.Router.extend({
       routes: {
           'all': "showAll",
           'pending': "showPending",
           'completed': "showCompleted"
       },

        showAll: function () {
            Drupal.todoViewInstance.showAll();
        },

        showPending: function () {
            Drupal.todoViewInstance.showPending();
        },

        showCompleted: function () {
            Drupal.todoViewInstance.showCompleted();
        }
    });

})(jQuery, _, Backbone, Drupal);