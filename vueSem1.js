// 1. Создать кнопку "Перевернуть". При клике на кнопку текст кнопки, должен перевернуться и отобразиться в обратном порядке.
new Vue({
  el: "#reverseDiv",
  data: {
    message: "сообщение наоборот",
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
});

// 2. Есть список элементов. Пользователь может добавлять новые элементы списка с текстом “Новый элемент списка” нажав на кнопку "Добавить".

new Vue({
  el: "#list",
  data: {
    todos: [
      { text: "элемент 1" },
      { text: "элемент 2" },
      { text: "элемент 3" },
    ],
  },
  methods: {
    paste: function () {
      this.todos.push({ text: "следующий элемент" });
    },
  },
});

// 3. * При клике на элемент списка он должен быть удален. (по желанию)

new Vue({
  el: "#del-list",
  data: {
    todos: ["элемент 1", "элемент 2", "элемент 3"],
  },
  methods: {
    del: function (index) {
      this.todos.splice(index, 1);
    },
  },
});
