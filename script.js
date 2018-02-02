
Vue.component('tasks', {
    template: '#tasks-template',
    props: ['list'],
    methods: {
        done: function(element) {
            console.log(element.completed);
            (element.completed) ? element.completed = false : element.completed = true;
        },
        isComleted: function(task) {
            return task.completed;
        },
        isInProgress: function(task) {
            return !task.completed;
        },
        deleteTask: function(task) {
            this.list.splice(task, 1);
        },
        clearCompleted: function() {
            this.list = this.list.filter(this.isInProgress);
        }
    },
    computed: {
        remaining: function(){
            var vm = this;
            return this.list.filter(function(task) {
                return ! vm.isComleted(task);
            }).length;
        }
    }
});

new Vue({
    el   : '#less7',
    data : {
        tasks: [
            { body: 'Go to the Bank', completed: false  },
            { body: 'Go to the Store', completed: false },
            { body: 'Go to the Doctor', completed: true }
        ]
    },
    methods: {
        done: function(element) {
            element.completed = ! element.completed;
        }
    }
});