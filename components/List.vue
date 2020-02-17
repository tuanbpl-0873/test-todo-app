<template>
    <li :class="{done: todo.done}">
        <label class="container-input">{{ todo.text }}
            <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
            <span class="checkmark"></span>
        </label>
        <nuxt-link class="remove" :to="'/todo/' + todo.id">Detail</nuxt-link>
        <span class="remove" @click="remove(todo)">x</span>
    </li>
</template>

<script>
    export default {
        name: 'List',
        props: ['todo', 'toggle', 'remove']
    }
</script>

<style>
    ul {
    margin: 0;
    padding: 0;
    }

    ul li {
    cursor: pointer;
    position: relative;
    padding: 12px 8px 12px 40px;
    list-style-type: none;
    background: #eee;
    font-size: 18px;
    transition: 0.2s;
    
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    }

    .remove {
    display: inline-block;
    float: right;
    margin-right: 42px;
    font-size: 22px;
    font-weight: bold;
    color: #353333;
    }

    aul li:nth-child(odd) {
    background: #f9f9f9;
    }

    ul li:hover {
    background: #ddd;
    }

    ul li.checked {
    background: #888;
    color: #fff;
    text-decoration: line-through;
    }

    ul li.checked::before {
    content: '';
    position: absolute;
    border-color: #fff;
    border-style: solid;
    border-width: 0 2px 2px 0;
    top: 10px;
    left: 16px;
    transform: rotate(45deg);
    height: 15px;
    width: 7px;
    }

    /* Customize the label (the container) */
    .container-input {
    display: inline;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    }

    /* Hide the browser's default checkbox */
    .container-input input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    }

    /* Create a custom checkbox */
    .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    }

    /* On mouse-over, add a grey background color */
    .container:hover input ~ .checkmark {
    background-color: #ccc;
    }

    /* When the checkbox is checked, add a blue background */
    .container input:checked ~ .checkmark {
    background-color: #2196F3;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    }

    /* Show the checkmark when checked */
    .container input:checked ~ .checkmark:after {
    display: block;
    }

    /* Style the checkmark/indicator */
    .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
</style>