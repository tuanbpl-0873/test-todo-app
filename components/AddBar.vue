<template>
    <div id="myDIV" class="header">
        <h2 style="margin:5px">My To Do List</h2>
        <input type="text" id="xxx" @keyup.enter="addTodo" placeholder="What needs to be done?">
    </div>
</template>

<script>
export default {
    props: ['addTodo']
}
</script>

<style scoped>
.header {
  background-color: #369cf4;
  padding: 30px 40px;
  color: white;
  text-align: center;
}

.header:after {
  content: "";
  display: table;
  clear: both;
}

input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 100%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

.addBtn {
  padding: 10px;
  width: 25%;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
}

.addBtn:hover {
  background-color: #bbb;
}
</style>