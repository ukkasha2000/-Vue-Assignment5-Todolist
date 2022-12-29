Vue.createApp({
  data() {
    return {
      todoTask: "",
      todoList: [],
      listVisibility: true,
    };
  },
  computed: {
    buttonText(){
        return this.listVisibility ? "Hide Tasks" : "Show Tasks"
    }
  },
  methods: {
    addTask() {
      this.todoList.push(this.todoTask);
      this.todoTask = '';
    },
    changeVisibility() {
      this.listVisibility = !this.listVisibility;
    },
  },
}).mount("#assignment");
