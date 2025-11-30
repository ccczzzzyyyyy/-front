document.addEventListener('DOMContentLoaded', function () {
    const todoList = document.getElementById('todo-list');
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const clearAllBtn = document.getElementById('clear-all');

    // 添加待办事项
    addBtn.addEventListener('click', function () {
        const taskText = todoInput.value.trim();
        if (taskText) {
            addTask(taskText);
            todoInput.value = '';
        }
    });

    // 按回车添加
    todoInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addBtn.click();
        }
    });

    // 删除任务
    todoList.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        }
    });

    // 清空所有
    clearAllBtn.addEventListener('click', function () {
        if (confirm('确定要清空所有待办事项吗？')) {
            todoList.innerHTML = '';
        }
    });

    function addTask(text) {
        const li = document.createElement('li');
        li.innerHTML = `${text} <button class="delete-btn">删除</button>`;
        todoList.appendChild(li);
    }
});