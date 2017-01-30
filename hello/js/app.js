/**
 * Created by brumeregan on 11/1/16.
 */
(function ($, _, Backbone, Drupal) {
    console.log('This is my module javascript');

    try {
        var todoModel = new Drupal.todoModel();
    } catch (e) {
        console.log('model ' + e.message);
    }

    // Instance of collection.
    try {
        var todoCollection = new Drupal.todoCollection(); //collection.
        Drupal.todoCollections = todoCollection;
    } catch (e) {
        console.log('collection ' + e.message);
    }

    try {
        var todoView = new Drupal.todoView(); //all list.
        Drupal.todoViewInstance = todoView;
    } catch (e) {
        console.log('view ' + e.message);
    }

    try {
        var todoItem = new Drupal.todoItem({model: todoModel}); //single item.
    } catch (e) {
        console.log('todo item ' + e.message);
    }

    try {
        var todoRouter = new Drupal.todoRouter();
        Backbone.history.start();
    } catch (e){
        console.log('router ' + e.message);
    }



})(jQuery, _, Backbone, Drupal);