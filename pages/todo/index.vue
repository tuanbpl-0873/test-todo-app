<template>
    <div class="container">
        <AddBar :addTodo="addTodo"/>
        <ul  id="myUL">
        <List
            v-for="todo in todos"
            :key="todo.text"
            :todo="todo"
            :toggle="toggle"
            :remove="remove"
        />    
        </ul>
    </div>
</template>

<script>
import AddBar from '~/components/AddBar.vue'
import List from '~/components/List.vue'
import { mapMutations } from 'vuex'

export default {
    components: {
        AddBar, List
    },

    created () {

        this.initData()

    },

    computed: {
        todos () {
        return this.$store.state.todos.list
        }

    },

    methods: {
        ...mapMutations({
            initData: 'todos/init'
        }),

        addTodo (e) {
            this.$store.commit('todos/add', e.target.value)
            e.target.value = ''
        },

        ...mapMutations({
            remove: 'todos/remove'
        }),

        ...mapMutations({
            toggle: 'todos/toggle'
        })
    },

    layout: 'todo'
}
    </script>

    <style>
    .container {
    width: 50%;
    }
    body {
    margin: 0;
    min-width: 250px;
    }

    * {
    box-sizing: border-box;
    }
    .done {
    background-color: #48ef2999 !important;
    }
    .close {
    position: absolute;
    right: 0;
    top: 0;
    padding: 12px 16px 12px 16px;
    }

    .close:hover {
    background-color: #f44336;
    color: white;
    }

</style>
