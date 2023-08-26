"use strict";
// Делаем ссылки на элементы
const btn = document.querySelector('.todo-btn');
const inputTodo = document.querySelector('.todo-input');
const formTodo = document.querySelector('.todo-form');
const todoList = document.querySelector('.todo-list');
const btnDeleteAll = document.querySelector('.todo-delete-all');
// Handle submit
const handleSubmit = (e) => {
    e.preventDefault();
    // Создаем новый объект Todo
    const newTodo = {
        id: Date.now(),
        todo: inputTodo.value,
        completed: false
    };
    // Сохраняем Todo в локал сторедж
    todos.push(newTodo);
    // Сохраняем в локал сторедж
    saveTodos();
    // Размещение нового дела
    appendTodo(newTodo);
    // Обнуляем поле ввода
    inputTodo.value = "";
};
// Сохранение todos
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
};
// Новый массив со Todo
const todos = JSON.parse(localStorage.getItem('todos') || '[]');
console.log(todos);
// Добавляем новый массив todos в DOM дерево
window.addEventListener('DOMContentLoaded', () => {
    todos.forEach(todo => appendTodo(todo));
});
const appendTodo = (newTodo) => {
    const newLi = document.createElement('li');
    const checkB = document.createElement('input');
    checkB.type = "checkbox";
    checkB.checked = newTodo.completed;
    // Добавление слушателя событий для checkbox
    checkB.addEventListener('change', () => {
        console.log('Changed');
        newTodo.completed = checkB.checked;
        // Сохраняем todos
        saveTodos();
    });
    newLi.append(newTodo.todo, checkB);
    todoList.prepend(newLi);
};
// Добавляем слушатель событий на форму
formTodo.addEventListener('submit', e => handleSubmit(e));
// Удаляем всё
const clearTodos = () => {
    todos.length = 0;
    saveTodos();
    todoList.innerHTML = "";
};
btnDeleteAll.onclick = () => clearTodos();
