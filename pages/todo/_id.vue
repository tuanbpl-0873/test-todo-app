<template>
<div>
    <h4>Title : {{todo.text}}</h4><br>
    <h3>Content : {{todo.content}}</h3><br>
    Status: <span style="color:green" v-if="todo.done">Task done</span>
    <span style="color:red" v-else>Not done yet</span>
    
</div>

</template>

<script>
export default {
    

    computed: {
        todo () {
            let todos = this.$store.state.todos.list
            let todoId = this.$route.params.id
            let data = {}
            todos.forEach(item => {
                if (todoId == item.id) {
                    data.content = item.content
                    data.text = item.text
                    data.done = item.done
                }
            });
        return data
        }

    },
}
</script>