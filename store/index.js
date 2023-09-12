export const state = () => ({
  tasks: [],
});

export const mutations = {
  TOGGLE_TASKS(state, { id, done }) {
    const task = state.tasks.find((task) => task.id === id);
    if (task) task.status.done = !done;
  },

  ADD_TASK(state, newTaskName) {
    if (newTaskName === "") {
      alert("Please enter a task name");
      return;
    }

    state.tasks = [
      ...state.tasks,
      {
        id: crypto.randomUUID(),
        name: newTaskName,
        status: { done: false },
      },
    ];
  },

  DELETE_TASK(state, id) {
    state.tasks = state.tasks.filter((task) => task.id !== id);
    // state.tasks.splice(state.tasks.indexOf(task), 1);
  },

  DONE_TASKS(state) {
    state.tasks = state.tasks.filter((task) => !task.status.done);
  },

  SET_TASKS(state, tasks) {
    state.tasks = tasks;
  },

  SET_NEW_TASK_NAME(state, name) {
    state.newTaskName = name;
  },
};

export const actions = {
  loadTasks({ commit }) {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    commit("SET_TASKS", savedTasks);
  },

  savedTasks({ state }) {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  },
};

export const getters = {
  selectedTasks(state) {
    return state.tasks.filter((task) => task.status.done);
  },

  totalTasks(state) {
    return state.tasks.length;
  }
};
