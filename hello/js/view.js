/**
 * Created by brumeregan on 11/1/16.
 */
// Drupal.todoView.el.data('aaa')
(function ($, _, Drupal, Backbone) {
    Drupal.todoView = Backbone.View.extend({
        el: '#todoapp',

        initialize: function () {
            this.$input = this.$('#new-todo');

            this.$list = $('#todo-list');

            this.listenTo(Drupal.todoCollections, 'add', this.addOne);
            this.listenTo(Drupal.todoCollections, 'reset', this.showAll);

            // Get all data.
            Drupal.todoCollections.fetch();
        },

        events: {
            'keypress #new-todo': 'createItem',
            'click #button--submit': 'createString'
        },

        createItem: function(e) {
            if(e.keyCode !== 13 || !this.$input.val().trim() ) {
                return;
            }

            Drupal.todoCollections.create(this.newAttributes());
            this.$input.val("");
        },

        createString: function(e) {
            e.preventDefault();

            if(!this.$input.val().trim() ) {
                return;
            }

            Drupal.todoCollections.create(this.newAttributes());
            this.$input.val("");
        },

        addOne: function(todo) {
            var view = new Drupal.todoItem({model: todo});
            $('#todo-list').append(view.render().el);
        },

        showAll: function () {
            this.$list.html('');
            Drupal.todoCollections.each(this.addOne, this);
        },

        showPending: function () {
            this.$list.html('');
            _.each(Drupal.todoCollections.todo_remaining(), this.addOne);
        },

        showCompleted: function () {
            this.$list.html('');
            _.each(Drupal.todoCollections.todo_completed(), this.addOne);
        },

        newAttributes: function() {
            return {
                title: this.$input.val().trim(),
                completed: false
            }
        }

    });


})(jQuery, _, Drupal, Backbone);