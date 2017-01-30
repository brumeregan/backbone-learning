(function ($, _, Drupal, Backbone) {
    Drupal.todoItem = Backbone.View.extend({
        tagName: 'li',
        className: 'todo__item',
        template: _.template($('#item-template').html()),

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            this.$input = this.$('.edit');
            return this;
        },

        events: {
            'dblclick .view': 'edit',
            'keypress .edit': 'update',
            'blur .edit': 'close',
            'click .destroy': 'delete',
            'click [type="checkbox"]' : 'toggleCompleted'
        },

        edit: function () {
            this.$el.addClass('editing');
            this.$input.focus();
        },

        close: function () {
            var value = this.$input.val().trim();
            if(value) {
                this.model.save({title: value});
            }

            this.$el.removeClass('editing')
        },

        update: function (e) {
            if(e.keyCode == 13) {
                this.close();
            }
        },

        delete: function () {
            this.model.destroy();
        },

        toggleCompleted: function () {
            this.model.toggle();
        }
    });
})(jQuery, _, Drupal, Backbone);